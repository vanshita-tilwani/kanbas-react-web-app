import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as client from "../../session/users/client";
import AccountHeader from "./AccountHeader";
import "./index.css";

function Account() {
  const { id } = useParams();
  
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
    <div>
    <AccountHeader account={account}/>
    <div className="w-50 account-editor" >
      <h3 className="white_font" style={{alignSelf : "center"}}>Account Information</h3>
      {account &&(
      <div>
      <div>
        <div className="container">
          <div className="row p-2">
            <label htmlFor="username"
                className="col-3 account-edit-content-title align-self-center white_font">Username</label>
            <input id="username"
                className="form-control col-6 account-edit-content-form" value={account.password}
                readOnly placeholder="username" />
          </div>

          <div className="row p-2">
            <label htmlFor="password"
                className="col-3 account-edit-content-title align-self-center white_font" >Password</label>
            <input id="password"
                className="form-control col-6 account-edit-content-form" 
                onChange={(e) =>
                  setAccount({ ...account, password: e.target.value })
                }
                value={account.password}
                type="password"
                placeholder="Password" />
          </div>

          <div className="row p-2">
            <label htmlFor="firstname"
                className="col-3 account-edit-content-title align-self-center white_font">FirstName</label>
            <input id="firstname"
                className="form-control col-6 account-edit-content-form" 
                onChange={(e) =>
                  setAccount({ ...account, firstName: e.target.value })
                }
                value={account.firstName}
                type="text"
                placeholder="Password" />
          </div>

          <div className="row p-2">
            <label htmlFor="lastname"
                className="col-3 account-edit-content-title align-self-center white_font">LastName</label>
            <input id="lastname"
                className="form-control col-6 account-edit-content-form" 
                onChange={(e) =>
                  setAccount({ ...account, lastName: e.target.value })
                }
                value={account.lastName}
                type="text"
                placeholder="Password" />
          </div>

          <div className="row p-2">
            <label htmlFor="dob"
                className="col-3 account-edit-content-title align-self-center white_font">Date of Birth</label>
            <input id="dob"
                className="form-control col-6 account-edit-content-form" 
                onChange={(e) => setAccount({ ...account, dob: e.target.value })}
                value={account.dob && account.dob.substring(0, 10)}
                type="date"
                placeholder="Password" />
          </div>

          <div className="row p-2">
            <label htmlFor="email"
                className="col-3 account-edit-content-title align-self-center white_font">Email</label>
            <input id="email"
                className="form-control col-6 account-edit-content-form mb-3" 
                onChange={(e) => setAccount({ ...account, email: e.target.value })}
                value={account.email}
                type="email"
                placeholder="Password" />
          </div>

          

          <button onClick={save} className="btn btn-danger w-100 mb-3">
            Save
          </button>
          </div>
        
        </div>
      </div>)}
      
    </div>
    </div>
    
  );
}

export default Account;
