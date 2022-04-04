export default function PreLoader() {
  return (
    <div className="position-absolute left-0 top-0 d-flex justify-content-center align-items-center vh-100 vw-100">
      <div>
        <h2 className="fs-1 fw-bold mb-4 text-center">Loading...</h2>
        <div className="spinner-border d-flex mx-auto">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
}
