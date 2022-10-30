import { signOutStart } from '@/reducers/authReducer';
import { useAppDispatch, useAppSelector } from '@/store';
import { EditOutlined } from '@ant-design/icons';

const Profile = () => {
  const profile = useAppSelector((state) => state.profile);
  const dispatch = useAppDispatch();

  return (
    <section className="py-3 d-flex justify-content-center align-items-center">
      <div className="col-lg-4 position-relative card-glass">
        <div
          className="position-absolute bg-dark text-center rounded-circle top-0 start-100 translate-middle"
          style={{ width: 30, height: 30 }}
        >
          <EditOutlined className="text-white" />
        </div>
        <div className="d-flex justify-content-center py-3">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            className="rounded-circle"
            style={{ width: 120 }}
            alt="Avatar"
          />
        </div>
        <div className="card mb-4 " style={{ background: 'none' }}>
          <div className="card-body">
            <div className="row">
              <div className="col-sm-4">
                <p className="mb-0">Full Name</p>
              </div>
              <div className="col-sm-8">
                <p className="text-muted mb-0">{profile.fullName}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-4">
                <p className="mb-0">Email</p>
              </div>
              <div className="col-sm-8">
                <p className="text-muted mb-0">{profile.email}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-4">
                <p className="mb-0">Phone</p>
              </div>
              <div className="col-sm-8">
                <p className="text-muted mb-0">{profile.phone}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-4">
                <p className="mb-0">Password</p>
              </div>
              <div className="col-sm-8">
                <p className="text-muted mb-0">*******</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-4">
                <p className="mb-0">Address</p>
              </div>
              <div className="col-sm-8">
                <p className="text-muted mb-0">{profile.address}</p>
              </div>
            </div>

            <hr />
            <div className="row">
              <button
                onClick={() => dispatch(signOutStart())}
                className="btn btn-dark"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
