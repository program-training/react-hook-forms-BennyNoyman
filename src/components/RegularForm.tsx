import { useForm, SubmitHandler } from "react-hook-form";
import {ErrorMessage} from "@hookform/error-message";
interface FormData {
  username: string;
  email: string;
  password:string;
}
const onSubmit: SubmitHandler<FormData> = data => alert(JSON.stringify(data));
function RegularForm() {
    const { register, formState: { errors }, handleSubmit } = useForm<FormData>();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <h1>I Have Been Changed To React Hook Form</h1>
      <div>
        <input
          type="text"
          id="username"
          //name="username"
          placeholder='Enter UserName'
          {...register("username", {
              required: `User name is required`,
              minLength: {
                  value: 2,
                  message: `Minimum 2 chars`}
          })}
        />
          {errors.username && <ErrorMessage
              errors={errors}
              name="username"
              render={({ message }) => <p>{message}</p>}
          />}
      </div>
      <div>
        <input
          type="text"
          id="email"
          placeholder='Enter Email'
          {...register("email", {
              required: "Email is required",
              pattern: {value: /^\S+@\S+$/i,
              message: `Stick to Email pattern`
              }})}
        />
          {errors.email && <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => <p>{message}</p>}
          />}
      </div>
      <div>
        <input
          type="text"
          id="password"
          placeholder='Enter Password'
          {...register("password", {
              required: `Password is required`,
              minLength:{
                  value: 8,
                  message: `Minimum 8 chars`
              }, maxLength:{
                  value: 20,
                  message: `Max 20 chars`},
              pattern:{
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
                  message: `Password must contain: upper case letter, lower case letter, digit and a special char`
              }})}
        />
          {errors.password && <ErrorMessage
              errors={errors}
              name="password"
              render={({ message }) => <p>{message}</p>}
          />}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default RegularForm;
