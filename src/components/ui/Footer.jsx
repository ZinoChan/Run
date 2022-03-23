export default function Footer() {
  return (
    <div className="footer position-absolute bottom-0 w-100 ">
      <div className=" w-100 mx-auto px-4 pb-3 d-flex justify-content-between">
        <div className="socials d-flex">
          <p className=" text-body text-uppercase fs-6">Dribbble</p>
          <p className=" mx-4 text-body text-uppercase fs-6">Github</p>
          <p className=" text-body text-uppercase fs-6">LinkedIn</p>
        </div>
        <p className="text-dark fs-6 fw-bold">&copy; 2022 Zino Chan</p>
      </div>
    </div>
  );
}
