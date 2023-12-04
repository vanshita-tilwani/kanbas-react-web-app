import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as client from "../../session/users/client";

function Account() {
  const { id } = useParams();
  
  const signout = async () => {
    await client.signout();
    navigate("/session/nav");
  };
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();
  const fetchAccount = async (id) => {
    try {
      if (id) {
        const account = await client.findUserById(id);
        setAccount(account);
      } else {
        const account = await client.account();
        setAccount(account);
      }
    } catch (err) {
      navigate("/session/login");
    }
  };

  const save = async () => {
    await client.updateUser(account);
  };

  useEffect(() => {
    fetchAccount(id);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="w-50">
      <h1>Account</h1>
      {account && (
        <div>
          <input
            value={account.username}
            readOnly
            placeholder="username"
            className="form-control mb-2"
          />
          <input
            onChange={(e) =>
              setAccount({ ...account, password: e.target.value })
            }
            value={account.password}
            type="password"
            className="form-control mb-2"
          />
          <input
            onChange={(e) =>
              setAccount({ ...account, firstName: e.target.value })
            }
            value={account.firstName}
            className="form-control mb-2"
          />
          <input
            onChange={(e) =>
              setAccount({ ...account, lastName: e.target.value })
            }
            value={account.lastName}
            className="form-control mb-2"
          />
          <input
            onChange={(e) => setAccount({ ...account, dob: e.target.value })}
            value={account.dob && account.dob.substring(0, 10)}
            type="date"
            className="form-control mb-2"
          />
          <input
            onChange={(e) => setAccount({ ...account, email: e.target.value })}
            value={account.email}
            type="email"
            className="form-control mb-2"
          />
          <select
            onChange={(e) => setAccount({ ...account, role: e.target.value })}
            value={account.role}
            className="form-control mb-2"
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <button onClick={save} className="btn btn-primary w-100 mb-2">
            Save
          </button>
          <button onClick={signout} className="btn btn-danger w-100 mb-2">
            Signout
          </button>
          {account.role === "ADMIN" && (
            <Link to="/session/admin/users" className="btn btn-warning w-100">
              Users
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

export default Account;
