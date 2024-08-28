import NavBar from "@/components/NavBar";
import React from "react";
import jewDetails from "./../Shared/jewDetails.json";
import InputField from "./components/InputField";
import Dropdown from "./components/Dropdown";
import Textarea from "./components/TextareaField";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
function AddListing() {
  const [formData, setFormData] = React.useState({});

  const handleInputChange = (name, vale) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: vale,
    }));
  };
  const onSubmit = (e) => {
    e.prevDataDefault();
  };

  return (
    <div>
      <NavBar />
      <div className="px-10 md:px-20 my-10 font-first">
        <h2 className="font-first text-4xl">Add New Listing</h2>
        <form className=" p-10 border rounded-xl mt-10">
          {/* Jewelley Details */}
          <div className="font-semibold text-xl font-first ">
            <h2 className="text-2xl  mb-6">Jewellery Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {jewDetails.jewDetails.map((item, index) => (
                <div Key={index}>
                  <label className="text-sm">
                    {item.label}
                    {item.required && <span className="text-red-500">*</span>}
                  </label>
                  {item.fieldType == "text" || item.fieldType == "number" ? (
                    <InputField
                      item={item}
                      handleInputChange={handleInputChange}
                    />
                  ) : item.fieldType == "dropdown" ? (
                    <Dropdown
                      item={item}
                      handleInputChange={handleInputChange}
                    />
                  ) : item.fieldType == "textarea" ? (
                    <Textarea
                      item={item}
                      handleInputChange={handleInputChange}
                    />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
          {/* <Separator className="my-10" /> */}
          {/* Jewellery Images */}
          <div className="mt-10 flex justify-end">
            <Button type="submit" onClick={(e) => onSubmit(e)}>
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddListing;
