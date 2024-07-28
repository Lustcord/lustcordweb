import { useEffect, useState, FormEvent } from 'react';
import Script from 'next/script';

interface Props {
  onVerify: (isOldEnough: boolean) => void;
}

const AgeVerificationPopup: React.FC<Props> = ({ onVerify }) => {
  const [yearOfBirth, setYearOfBirth] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const currentYear = new Date().getFullYear();
    const age = currentYear - Number(yearOfBirth);
    onVerify(age >= 18);
  };

  useEffect(() => {
    const modalElement = document.getElementById('staticBackdrop');
    if (modalElement) {
      const bootstrapModal = (window as any).bootstrap.Modal;
      if (bootstrapModal) {
        const modal = new bootstrapModal(modalElement);
        modal.show();
      }
    }
  }, []);

  return (
    <>
    <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        strategy="beforeInteractive"
      />
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
      
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-dark" id="staticBackdropLabel">Age Verification</h5>
          </div>
          <div className="modal-body">
            <div className='input-group mb-3'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="yearOfBirth" className='form-label text-dark'>Enter your year of birth:</label>
                <input
                    className='form-control text-dark'
                    id="yearOfBirth"
                    type="number"
                    value={yearOfBirth}
                    onChange={(e) => setYearOfBirth(e.target.value)}
                    required
                />
                <button type="submit" data-bs-dismiss="modal" className="btn btn-dark">Submit</button>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AgeVerificationPopup;