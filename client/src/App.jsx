
import './App.css'
import { NavLink, Route, Routes } from "react-router-dom";
import { FaAnglesRight, FaCheck } from "react-icons/fa6";

function App() {

  return (
    <>
      <main className="h-screen w-full bg-[#ecf2e9] flex justify-start items-center flex-col overflow-auto">
        <header className="h-fit w-full p-2 bg-white flex justify-center items-center shadow-md">
          <div className="max-w-6xl w-full h-fit flex justify-between items-center py-1 px-3">
            <img src="/logo.png" alt="Logo" />
            <nav className="flex justify-end items-center h-fit w-fit">
              <NavLink to={"https://maps.app.goo.gl/DPXtP3g52oJrAegE6"} target="_blank" className={"text-[#000000a6] p-2 focus-visible:shadow-[0_0_0_0.25rem_#0d6efd40] outline-none"}>
                Nik Enterprises
              </NavLink>
              <NavLink to={"https://maps.app.goo.gl/DPXtP3g52oJrAegE6"} target="_blank" className={"text-[#000000a6] p-2 focus-visible:shadow-[0_0_0_0.25rem_#0d6efd40] outline-none"}>
                Login
              </NavLink>
            </nav>
          </div>
        </header>
        <Routes>
          <Route path="/" element={(
            <div className='py-4 flex flex-col justify-start items-center h-fit w-full max-w-3xl'>
              <div className='mt-4 flex justify-center items-center h-fit w-full'>
                <img src="/header-image.jpg" alt="Header Image" className='rounded-xl overflow-hidden flex' />
              </div>
              <div className="mt-4 relative w-full bg-[#f8fafc] rounded-md overflow-hidden border border-[#0000002d]">
                <div className="h-3 w-full flex bg-[#3e7822]" />
                <h1 className='text-2xl md:text-3xl lg:text-4xl p-4 border-b border-[#0000002d] mb-3'>Vendor Onboarding</h1>
                <form action="" className='p-6 flex flex-col justify-start items-end h-fit w-full'>
                  <div className="form-group mb-4">
                    <label htmlFor='company_name' className='required mb-2'>Company Name</label>
                    <input type="text" />
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor='company_name' className='required mb-2'>Type of Organization</label>
                    <div className="flex flex-col justify-start items-start h-fit w-full">
                      <div className="flex gap-[1ch] radio-button mb-2">
                        <input type="radio" name="type_of_organization" />
                        <p>Pvt Ltd</p>
                      </div>
                      <div className="flex gap-[1ch] radio-button mb-2">
                        <input type="radio" name="type_of_organization" />
                        <p>Partnership</p>
                      </div>
                      <div className="flex gap-[1ch] radio-button mb-2">
                        <input type="radio" name="type_of_organization" />
                        <p>Individual</p>
                      </div>
                      <div className="flex gap-[1ch] radio-button mb-2">
                        <input type="radio" name="type_of_organization" />
                        <p>LLP</p>
                      </div>
                    </div>
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor='gst_number' className='required mb-2'>GST Number</label>
                    <input type="text" />
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor='gst_document' className='required mb-2'>GST Document</label>
                    <input type="file" className='w-full rounded-md border border-gray-300 file:border-0 file:border-r file:border-gray-300 file:pr-3 file:mr-3' />
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor='msme_certificate' className='required mb-2'>Do you have MSME Certificate?</label>
                    <div className="flex flex-col justify-start items-start h-fit w-full">
                      <div className="flex gap-[1ch] radio-button mb-2">
                        <input type="radio" name="has_msme_certificate" />
                        <p>Yes</p>
                      </div>
                      <div className="flex gap-[1ch] radio-button mb-2">
                        <input type="radio" name="has_msme_certificate" />
                        <p>No</p>
                      </div>
                    </div>
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor='pan_number' className='required mb-2'>PAN Number</label>
                    <input type="text" />
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor='pan_copy' className='required mb-2'>PAN Copy</label>
                    <p className="text-gray-500 text-xs mb-4">Please upload a clear copy of your PAN card(front and back). Supported formats: image, pdf, max file size: 5MB</p>
                    <input type="file" className='w-full rounded-md border border-gray-300 file:border-0 file:border-r file:border-gray-300 file:pr-3 file:mr-3' />
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor='aadhaar_number' className='required mb-2'>Aadhaar Number</label>
                    <input type="text" />
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor='aadhaar_copy' className='required mb-2'>Aadhaar Copy</label>
                    <p className="text-gray-500 text-xs mb-4">Please upload a clear copy of your AADHAR card(front and back). Supported formats: image, pdf, max file size: 1MB</p>
                    <input type="file" className='w-full rounded-md border border-gray-300 file:border-0 file:border-r file:border-gray-300 file:pr-3 file:mr-3' />
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor='company_address' className='required mb-2'>Company Address</label>
                    <textarea type="text" rows={4} />
                  </div>
                  <div className="flex gap-6 justify-between items-start w-full h-fit">
                    <div className="form-group mb-4">
                      <label htmlFor='city' className='required mb-2'>City</label>
                      <input type="text" />
                    </div>
                    <div className="form-group mb-4">
                      <label htmlFor='pincode' className='required mb-2'>Pincode</label>
                      <input type="text" />
                    </div>
                    <div className="form-group mb-4">
                      <label htmlFor='state' className='required mb-2'>State</label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor='business_location' className='required mb-2'>Business Location on Google Map</label>
                    <input type="text" />
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor='location_proof' className='required mb-2'>Proof of Business Location</label>
                    <p className="text-gray-500 text-xs mb-4">You can upload a picture of business location with company name board in the Supported formats: image, pdf and max file size allowed is 5MB</p>
                    <input type="file" className='w-full rounded-md border border-gray-300 file:border-0 file:border-r file:border-gray-300 file:pr-3 file:mr-3' />
                  </div>
                  <h1 className='w-full flex justify-start items-center gap-2 text-lg md:text-xl lg:text-2xl font-light my-4 mt-8'>
                    <FaAnglesRight />
                    <span>POC Details</span>
                  </h1>
                  <div className="flex gap-6 justify-between items-start w-full h-fit">
                    <div className="form-group mb-4">
                      <label htmlFor='contact_name' className='required mb-2'>Contact Name</label>
                      <input type="text" />
                    </div>
                    <div className="form-group mb-4">
                      <label htmlFor='designation' className='required mb-2'>Designation</label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="flex gap-6 justify-between items-start w-full h-fit">
                    <div className="form-group mb-4">
                      <label htmlFor='contact_phone' className='required mb-2'>Contact Phone Number</label>
                      <input type="text" />
                    </div>
                    <div className="form-group mb-4">
                      <label htmlFor='contact_email' className='required mb-2'>Contact Email</label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor='msme_certificate' className='required mb-2'>Did anyone introduce us to you?</label>
                    <div className="flex flex-col justify-start items-start h-fit w-full">
                      <div className="flex gap-[1ch] radio-button mb-2">
                        <input type="radio" name="is_introduced" />
                        <p>Yes</p>
                      </div>
                      <div className="flex gap-[1ch] radio-button mb-2">
                        <input type="radio" name="is_introduced" />
                        <p>No</p>
                      </div>
                    </div>
                  </div>
                  <h1 className='w-full flex justify-start items-center gap-2 text-lg md:text-xl lg:text-2xl font-light my-4 mt-8'>
                    <FaAnglesRight />
                    <span>bank Details</span>
                  </h1>
                  <div className="form-group mb-4">
                    <label htmlFor='account_number' className='required mb-2'>Account Number</label>
                    <input type="text" />
                  </div>
                  <div className="flex gap-6 justify-between items-start w-full h-fit">
                    <div className="form-group mb-4">
                      <label htmlFor='bank_name' className='required mb-2'>Bank Name</label>
                      <input type="text" />
                    </div>
                    <div className="form-group mb-4">
                      <label htmlFor='ifsc_code' className='required mb-2'>IFSC Code</label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor='branch_name' className='required mb-2'>Branch Name</label>
                    <input type="text" />
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor='account_holder_name' className='required mb-2'>Account Holder Name</label>
                    <input type="text" />
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor='cancelled_cheque' className='required mb-2'>Cancelled Cheque</label>
                    <input type="file" className='w-full rounded-md border border-gray-300 file:border-0 file:border-r file:border-gray-300 file:pr-3 file:mr-3 mb-2' />
                    <p className="text-gray-500 text-xs mb-4">Please upload a clear copy of your cancelled cheque. Supported formats: image, pdf, max file size: 5MB.</p>
                  </div>
                  <div className="flex gap-6 justify-between items-start w-full h-fit">
                    <div className="form-group mb-4">
                      <label htmlFor='company_seal' className='required mb-2'>Company Seal</label>
                      <input type="file" className='w-full rounded-md border border-gray-300 file:border-0 file:border-r file:border-gray-300 file:pr-3 file:mr-3 mb-2' />
                      <p className="text-gray-500 text-xs mb-4">Please upload company seal. Supported formats: image, pdf, max file size: 5MB.</p>
                    </div>
                    <div className="form-group mb-4">
                      <label htmlFor='company_signature' className='required mb-2'>Company Signature</label>
                      <input type="file" className='w-full rounded-md border border-gray-300 file:border-0 file:border-r file:border-gray-300 file:pr-3 file:mr-3 mb-2' />
                      <p className="text-gray-500 text-xs mb-4">Please upload company signature. Supported formats: image, pdf, max file size: 5MB.</p>
                    </div>
                  </div>
                  <button type="submit" className='hover:bg-[#0b5ed7] focus:bg-[#0b5ed7] bg-[#0d6efd] transition-all flex items-center gap-1 p-2 px-3 cursor-pointer focus-visible:border-[#0a58ca] border border-transparent outline-none focus-visible:shadow-[0_0_0_0.25rem_#3184fd80] text-white rounded-md'>
                    <FaCheck />Submit
                  </button>
                </form>
              </div>
            </div>
          )} />
        </Routes>
      </main>
    </>
  )
}

export default App
