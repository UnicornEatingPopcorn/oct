import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Form.sass";
import { FlightsCreateSession } from "../../actions/FlightsCreateSession";
import { SkyscannerGetToken } from "../../actions/SkyscannerGetToken";

const Form = () => {
  const [travelerInfo, setTravelerInfo] = useState({
    firstName: "",
    lastName: "",
    inboundDate: "",
    outboundDate: "",
    travelers: "",
    citizenship: "",
    currency: "",
    language: "",
    departureAirport: "",
    arrivalAirport: "",
  });

  const onSubmitButton = () => {
    //call action for flights
    // SkyscannerGetToken();
    FlightsCreateSession();
    //call action for hotels
  };

  const [openInbound, setOpenInbound] = useState(false);
  const [openOutbound, setOpenOutbound] = useState(false);

  return (
    <form className="ui form" onSubmit={onSubmitButton}>
      <h4 className="ui dividing header">Traveler Information</h4>
      <div className="field">
        <label>Name</label>
        <div className="two fields">
          <div className="field">
            <input
              type="text"
              name="shipping[first-name]"
              placeholder="First Name"
              value={travelerInfo.firstName}
              onChange={(e) =>
                setTravelerInfo({ ...travelerInfo, firstName: e.target.value })
              }
            />
          </div>
          <div className="field">
            <input
              type="text"
              name="shipping[last-name]"
              placeholder="Last Name"
              value={travelerInfo.lastName}
              onChange={(e) =>
                setTravelerInfo({ ...travelerInfo, lastName: e.target.value })
              }
            />
          </div>
        </div>
      </div>

      <div className="field">
        <label>Travel Dates</label>
        <div className="two fields">
          <div className="field">
            <input
              type="text"
              name="outboundDate"
              placeholder="Departure date"
              value={travelerInfo.outboundDate}
              readOnly
              onClick={() => {
                setOpenOutbound(!openOutbound);
              }}
            />
            {openOutbound && (
              <Calendar
                onChange={(value) => {
                  setTravelerInfo({
                    ...travelerInfo,
                    outboundDate: value.toLocaleDateString(),
                  });
                  setOpenOutbound(!openOutbound);
                }}
                value={new Date()}
                className="form__calendar"
              />
            )}
          </div>
          <div className="field">
            <input
              type="text"
              name="inboundDate"
              placeholder="Arrival date"
              value={travelerInfo.inboundDate}
              readOnly
              onClick={() => {
                setOpenInbound(!openInbound);
              }}
            />
            {openInbound && (
              <Calendar
                onChange={(value) => {
                  setTravelerInfo({
                    ...travelerInfo,
                    inboundDate: value.toLocaleDateString(),
                  });
                  setOpenInbound(!openInbound);
                }}
                value={new Date()}
                className="form__calendar"
              />
            )}
          </div>
        </div>

        <div className="field">
          <label>Booking data</label>
          <div className="four fields">
            <div className="field">
              <input
                type="text"
                name="travelers"
                placeholder="How many person?"
                value={travelerInfo.travelers}
                onChange={(e) =>
                  setTravelerInfo({
                    ...travelerInfo,
                    travelers: e.target.value,
                  })
                }
              />
            </div>

            <div className="field">
              <input
                type="text"
                name="Citizenship"
                placeholder="Citizenship"
                value={travelerInfo.citizenship}
                onChange={(e) =>
                  setTravelerInfo({
                    ...travelerInfo,
                    citizenship: e.target.value,
                  })
                }
              />
            </div>
            <div className="field">
              <input
                type="text"
                name="currency"
                placeholder="Your currency"
                value={travelerInfo.currency}
                onChange={(e) =>
                  setTravelerInfo({ ...travelerInfo, currency: e.target.value })
                }
              />
            </div>
            <div className="field">
              <input
                type="text"
                name="Language"
                placeholder="Speaking language"
                value={travelerInfo.language}
                onChange={(e) =>
                  setTravelerInfo({ ...travelerInfo, language: e.target.value })
                }
              />
            </div>
          </div>

          <div className="two fields">
            <div className="field">
              <input
                type="text"
                name="Departure"
                placeholder="Departure Airport"
                value={travelerInfo.departureAirport}
                onChange={(e) =>
                  setTravelerInfo({
                    ...travelerInfo,
                    departureAirport: e.target.value,
                  })
                }
              />
            </div>
            <div className="field">
              <input
                type="text"
                name="Arrival"
                placeholder="Arrival Airport"
                value={travelerInfo.arrivalAirport}
                onChange={(e) =>
                  setTravelerInfo({
                    ...travelerInfo,
                    arrivalAirport: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="ui button" tabIndex="0" onClick={onSubmitButton}>
        Create your trip
      </div>
    </form>
  );
};

export default Form;
