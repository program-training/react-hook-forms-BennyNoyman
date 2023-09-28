import { useForm, SubmitHandler } from "react-hook-form";

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
          {...register("username", {required: true, minLength: 2})}
          aria-invalid={errors.username ? "true" : "false"}
        />
          {errors.username?.type === 'required' && <p role="alert">User name is required</p>}
          {errors.username?.type === 'minLength' && <p role= "alert">Minimum 2 chars</p>}
      </div>
      <div>
        <input
          type="text"
          id="email"
          placeholder='Enter Email'
          {...register("email", {required: true, pattern: /^\S+@\S+$/i})}
          aria-invalid={errors.email ? "true" : "false"}
        />
          {errors.email?.type === 'required' && <p role="alert">Email is required</p>}
          {errors.email?.type === 'pattern' && <p role= "alert" >Stick to Email pattern</p>}
      </div>
      <div>
        <input
          type="text"
          id="password"
          placeholder='Enter Password'
          {...register("password", {required: true, minLength: 8, maxLength: 20, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/})}
          aria-invalid={errors.password ? "true" : "false"}
        />
          {errors.password?.type === 'required' && <p role="alert">Password is required</p>}
          {errors.password?.type === "minLength" && <p role="alert">Minimum 8 chars</p>}
          {errors.password?.type === "maxLength" && <p role="alert">Max 20 chars</p>}
          {errors.password?.type === 'pattern' && <p role= "alert">Password must contain upper case letter, lower case letter, digit and a special char</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default RegularForm;
