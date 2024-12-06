import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Alert,
  Row,
  Col,
} from "reactstrap";
import REGISTER_JPG from "../assets/register.jpg";
import STATE_CITY from "../data/stateCity.json";
import { useNavigate } from "react-router-dom";

const Register = () => {
  // State Management
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    customerID: "CS001",
    companyName: "",
    email: "",
    state: "",
    city: "",
    ownerName: "",
    ownerMobile: "",
    ownerMobile1: "",
    ownerMobile2: "",
    website: "",
    gstNo: "",
    panNo: "",
    aboutUs: "",
    personalDetails: "",
    product: "",
  });
  const [alertMessage, setAlertMessage] = useState("");
  const [cities, setCities] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (formData.state) {
      if (STATE_CITY && Object.keys(STATE_CITY).length > 0) {
        setCities(STATE_CITY[formData.state]);
      }
    } else {
      setCities([]);
    }
  }, [formData.state]);

  // Handle field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate first step before proceeding
  const validateStep1 = () => {
    const {
      companyName,
      email,
      state,
      city,
      ownerName,
      ownerMobile,
      gstNo,
      panNo,
    } = formData;

    if (
      !companyName ||
      !email ||
      !state ||
      !city ||
      !ownerName ||
      !ownerMobile ||
      !gstNo ||
      !panNo
    ) {
      return false;
    }

    setAlertMessage("");
    return true;
  };

  const nextStep = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    if (validateStep1()) setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Navigate to another screen or perform an action
    navigate("/thanks");
  };

  const handleInvalid = (e) => {
    // Optionally you can customize error message or highlight the field
    setAlertMessage("Please enter a valid email address.");
  };

  return (
    <div className="container mt-5">
      <Row className="align-items-start">
        {/* Left Section - Image */}
        <Col md="6" className="d-none d-md-block">
          <img
            src={REGISTER_JPG}
            alt="Registration Visual"
            className="img-fluid rounded"
          />
        </Col>

        {/* Right Section - Form */}
        <Col md="6">
          <div className="p-4 shadow-sm rounded" style={{ background: "#f9f9f9" }}>
            {/* Alert */}
            {alertMessage && (
              <Alert color="danger" className="text-center">
                {alertMessage}
              </Alert>
            )}

            {/* <Form> */}
            {step === 1 && (
              <>
                {/* Customer Information */}
                <h3 className="text-center">Register</h3>
                <form onSubmit={nextStep}>
                  <FormGroup>
                    <Label>Customer ID</Label>
                    <Input
                      type="text"
                      name="customerID"
                      value={formData.customerID}
                      disabled
                      className="bg-light"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Company Name</Label><span className="text-danger">*</span>
                    <Input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Email ID</Label><span className="text-danger">*</span>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onInvalid={handleInvalid}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>State</Label><span className="text-danger">*</span>
                    <Input
                      type="select"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select State</option>
                      {
                        STATE_CITY && Object.keys(STATE_CITY).length > 0 && Object.keys(STATE_CITY).map(elem => (
                          <option key={elem} value={elem}>{elem}</option>
                        ))
                      }
                    </Input>
                  </FormGroup>
                  {
                    cities.length > 0 &&
                    <FormGroup>
                      <Label>City</Label><span className="text-danger">*</span>
                      <Input
                        type="select"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select City</option>
                        {
                          cities && cities.length > 0 && cities.map(elem => (
                            <option key={elem} value={elem}>{elem}</option>
                          ))
                        }
                      </Input>
                    </FormGroup>
                  }
                  <FormGroup>
                    <Label>Owner Name</Label><span className="text-danger">*</span>
                    <Input
                      type="text"
                      name="ownerName"
                      value={formData.ownerName}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Owner Mobile</Label><span className="text-danger">*</span>
                    <Input
                      type="text"
                      name="ownerMobile"
                      value={formData.ownerMobile}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Owner Mobile 1</Label>
                    <Input
                      type="text"
                      name="ownerMobile1"
                      value={formData.ownerMobile1}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Owner Mobile 2</Label>
                    <Input
                      type="text"
                      name="ownerMobile2"
                      value={formData.ownerMobile2}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>GST No</Label><span className="text-danger">*</span>
                    <Input
                      type="text"
                      name="gstNo"
                      value={formData.gstNo}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>PAN No</Label><span className="text-danger">*</span>
                    <Input
                      type="text"
                      name="panNo"
                      value={formData.panNo}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                  <Button
                    style={{
                      backgroundColor: "#3D54A2",
                      border: "none",
                      width: "100%",
                    }}
                    type="submit"
                  >
                    Next
                  </Button>
                </form>
              </>
            )}

            {step === 2 && (
              <>
                <form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Label>About Us</Label><span className="text-danger">*</span>
                    <Input
                      type="textarea"
                      name="aboutUs"
                      value={formData.aboutUs}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Personal Details</Label><span className="text-danger">*</span>
                    <Input
                      type="select"
                      name="personalDetails"
                      value={formData.personalDetails}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select</option>
                      <option value="Details1">Details 1</option>
                      <option value="Details2">Details 2</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label>Product</Label><span className="text-danger">*</span>
                    <Input
                      type="select"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Product</option>
                      <option value="Manufaturing">Manufaturing</option>
                      <option value="Trading">Trading</option>
                    </Input>
                  </FormGroup>
                  <Button
                    style={{
                      backgroundColor: "#3D54A2",
                      border: "none",
                      width: "100%",
                    }}
                  >
                    Register
                  </Button>
                </form>
              </>
            )}
            {/* </Form> */}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
