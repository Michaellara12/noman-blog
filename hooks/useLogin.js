// React
import { useState } from "react";

function useLogin() {
  const [form, setForm] = useState('login');

  return {form, setForm}
}

export default useLogin