import React, { useState } from "react";
import "./RequestCompanyModal.css";
import API from "../api";
import { href } from "react-router-dom";

const RequestCompanyModal = ({ isOpen, onClose }) => {
  const [companyId, setCompanyId] = useState("");
  const [companyDetails, setCompanyDetails] = useState(null);
  const [requestedRole, setRequestedRole] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [step, setStep] = useState(1); 
  // 1 = enter ID, 2 = confirm + message, 3 = success

  if (!isOpen) return null;

  /* STEP 1: FETCH COMPANY */
  const handleSubmit = async () => {
    if (!companyId.trim()) return;

    try {
      setLoading(true);
      setError("");

      const response = await API.get(`company/${companyId}`);
      setCompanyDetails(response.data);
      setStep(2);

    } catch (err) {
      if (err.response?.status === 404) {
        setError("Company not found");
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  /* STEP 2: COMPLETE REQUEST */
  const handleComplete = async () => {
    if (!requestedRole.trim()) {
      setError("Requested role is required");
      return;
    }

    try {
      setLoading(true);
      setError("");

      await API.post("company/request", {
        companyId,
        requestedRole,
        message
      });

      setStep(3);
    } catch (err) {
      setError(err?.response?.data?.message || "Failed to send request");
    } finally {
      setLoading(false);
    }
  };

  const resetAndClose = () => {
    setCompanyId("");
    setCompanyDetails(null);
    setRequestedRole("");
    setMessage("");
    setError("");
    setStep(1);
    //window.location.href = "/select-company";
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="close-btn" onClick={resetAndClose}>×</button>

        {/* STEP 1 */}
        {step === 1 && (
          <>
            <h2>Request to Company</h2>

            <input
              type="text"
              placeholder="Enter Company ID"
              value={companyId}
              onChange={(e) => setCompanyId(e.target.value)}
            />

            {error && <p className="error-text">{error}</p>}

            <button
              className="submit-btn"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Checking..." : "Submit"}
            </button>
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && companyDetails && (
          <>
            <h2>Confirm Company</h2>

            <div className="company-card-confirm">
              <img
                src={companyDetails.logo}
                alt={companyDetails.companyName}
                className="company-logo"
              />
              <div>
                <p><strong>{companyDetails.companyName}</strong></p>
                <p>{companyDetails.description}</p>
                <p>{companyDetails.industry}</p>
              </div>
            </div>

            <input
              type="text"
              placeholder="Requested Role"
              value={requestedRole}
              onChange={(e) => setRequestedRole(e.target.value)}
            />

            <textarea
              placeholder="Message (optional)"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            {error && <p className="error-text">{error}</p>}

            <button
              className="submit-btn"
              onClick={handleComplete}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Complete Request"}
            </button>
          </>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <>
            <h2>Request Sent</h2>
            <p className="success-text">
              Your request has been sent successfully.
            </p>

            <button className="submit-btn" onClick={resetAndClose}>
              OK
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default RequestCompanyModal;
