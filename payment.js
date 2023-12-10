import * as React from "react";
import { useForm } from "@beekai/react";

export function App() {
  const {
    register,
    onSubmit,
    handleSubmit,
    control,
    submissionId,
    formState: {
      errors,
      isSubmitting,
    }
  } = useForm({
    formId: "bcf26eb8-89a5-4086-a270-8fc1713eecef",
    defaultValues: {
      "email-address": "",
      "first-name": "",
      "last-name": "",
      "cardnumber": "",
      "expiry-date": "",
      "c-v-v": "",
      "billing-address": ""
    }
  });

  if (submissionId) {
    return <p>Thank you for your recent transaction with us. We are pleased to inform you that your card payment has been successfully authorized.


In the event that we require any further verification or information, rest assured we will reach out to you through this same email channel. Our aim is to ensure a seamless and secure transaction process for all our valued clients.


We appreciate your trust in us and look forward to serving you again soon.</p>;
  }

  return (
    <form onSubmit={onSubmit}>
      <h1>Secured 3d Checkout</h1>

      {errors.root?.serverError && <p>Something went wrong, and please try again.</p>}

      <div>
        <label>
          <span>Email Address</span>
          <input
            {...register("email-address", {
              required: true,
            })}
            aria-invalid={errors["email-address"] ? "true" : "false"}
            placeholder="Email Address"
            type="email"
          />
        </label>
        {errors["email-address"] && <p role="alert">{errors["email-address"]?.message}</p>}
      </div>

      <div>
        <label>
          <span>First Name</span>
          <input
            {...register("first-name", {
              required: true,
            })}
            aria-invalid={errors["first-name"] ? "true" : "false"}
            placeholder="First Name "
            type="text"
            list="first-name"
          />
          <datalist id="first-name">
            <option value="Name"  />
          </datalist>
        </label>
        {errors["first-name"] && <p role="alert">{errors["first-name"]?.message}</p>}
      </div>

      <div>
        <label>
          <span>Last Name</span>
          <input
            {...register("last-name", {
              required: true,
            })}
            aria-invalid={errors["last-name"] ? "true" : "false"}
            placeholder="First Name "
            type="text"
            list="last-name"
          />
          <datalist id="last-name">
            <option value="Name"  />
          </datalist>
        </label>
        {errors["last-name"] && <p role="alert">{errors["last-name"]?.message}</p>}
      </div>

      <div>
        <label>
          <span>Card Number</span>
          <input
            {...register("cardnumber", {
              required: "Please input the correct payment card number",
              min: {
                value: 13,
                message: "Card number is incomplete"
              },
              max: {
                value: 19,
                message: "Invalid card number"
              },
              pattern: {
                value: /String/,
                message: "Please Input a valid card"
              },
            })}
            aria-invalid={errors["cardnumber"] ? "true" : "false"}
            placeholder="Card Number"
            type="number"
          />
        </label>
        {errors["cardnumber"] && <p role="alert">{errors["cardnumber"]?.message}</p>}
      </div>

      <div>
        <label>
          <span>Expiry Date</span>
          <input
            {...register("expiry-date", {
              required: "Please select the correct expiry date",
            })}
            aria-invalid={errors["expiry-date"] ? "true" : "false"}
            type="month"
          />
        </label>
        {errors["expiry-date"] && <p role="alert">{errors["expiry-date"]?.message}</p>}
      </div>

      <div>
        <label>
          <span>CVV</span>
          <input
            {...register("c-v-v", {
              required: "Please input the correct payment card CVV",
              min: {
                value: 3,
                message: "CVV is Invalid"
              },
              max: {
                value: 4,
                message: "CVV is Invalid"
              },
              pattern: {
                value: /String/,
                message: "Please Input a valid CVV"
              },
            })}
            aria-invalid={errors["c-v-v"] ? "true" : "false"}
            placeholder="CVV"
            type="number"
          />
        </label>
        {errors["c-v-v"] && <p role="alert">{errors["c-v-v"]?.message}</p>}
      </div>


      <button disabled={isSubmitting}>Submit</button>
    </form>
  );
}
