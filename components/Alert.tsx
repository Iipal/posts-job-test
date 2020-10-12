export default function Alert({ text }) {
  return (
    <div className='alert alert-danger mt-3' role='alert'>
      {text}
    </div>
  );
}
