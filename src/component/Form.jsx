function Form() {
  return (
    <form>
      <div className="form-control">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
      </div>
      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
