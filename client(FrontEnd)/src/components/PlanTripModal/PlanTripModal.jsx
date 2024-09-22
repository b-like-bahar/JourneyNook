import Modal from 'react-modal';
import './PlanTripModal.scss';

Modal.setAppElement('#root');

function PlanTripModal({ isOpen, onClose, onSubmit, days, setDays, budget, setBudget, tripType, setTripType }) {

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const tripData = { days, budget, tripType };
    onSubmit(tripData);
  };

  const tripOptions = [
    { value: "family", label: "Family" },
    { value: "friends", label: "Friends" },
    { value: "couple", label: "Couple" },
    { value: "solo", label: "Solo" }
  ];

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Plan Your Trip"
      className="city__modal"
      overlayClassName="city__modal-overlay"
    >
      <h2 className="city__modal-title">Plan Your Trip</h2>
      <form className="city__modal-form" onSubmit={formSubmitHandler}>
        <div className="city__modal-form-item">
          <label
            className="city__modal-form-item-label  large"
            htmlFor="city__modal-form-item-days"
          >
            How many days will your trip last?
          </label>
          <input
            className="city__modal-form-item-days  city__modal-form-item-component"
            id="city__modal-form-item-days"
            type="number"
            min="1"
            value={days}
            placeholder="Number of days"
            onChange={(event) => setDays(event.target.value)}
            required
          />
        </div>
        <div className="city__modal-form-item">
          <label
            className="city__modal-form-item-label large"
            htmlFor="city__modal-form-item-budget"
          >
            What is your total budget for the trip?
          </label>
          <input
            className="city__modal-form-item-budget  city__modal-form-item-component"
            id="city__modal-form-item-budget"
            type="number"
            min="0"
            max="1000000"
            value={budget}
            placeholder="$USD"
            onChange={(event) => setBudget(event.target.value)}
            required
          />
        </div>
        <div className="city__modal-form-item">
          <label
            className="city__modal-form-item-label  large"
            htmlFor="city__modal-form-item-type">
            What type of trip are you planning
          </label>
          <div className="city__modal-form-item-wrapper">
          <select
            className="city__modal-form-item-select  city__modal-form-item-component"
            id="city__modal-form-item-type"
            value={tripType}
            onChange={(event) => setTripType(event.target.value)}
            required
          >
            <option value="" disabled>Select trip type</option>
            {tripOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          </div>
        </div>
        <div className="city__modal-form-buttons">
          <button className="city__modal-form-buttons-cancel" type="button" onClick={onClose}>Cancel</button>
          <button className="city__modal-form-buttons-submit" type="submit">Submit</button>
        </div>
      </form>
    </Modal>
  );
}

export default PlanTripModal;



