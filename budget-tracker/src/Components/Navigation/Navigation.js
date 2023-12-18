import styled from "styled-components";
import { menuItems, loginItem, signupItem } from "../../utils/menuItems";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";

const Navigation = ({ active, setActive }) => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <NavStyled>
      <div className="user-icon">
        <div className="text">
          {user ? (
            <>
              <h3>Hi {user.email}!</h3>
            </>
          ) : (
            <h3>Username</h3>
          )}

          <p>Let's save for future!</p>
        </div>
      </div>
      <ul className="menu-items">
        {menuItems.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => setActive(item.id)}
              className={active === item.id ? "active" : ""}
            >
              {item.icon}
              <span>{item.title}</span>
            </li>
          );
        })}
      </ul>
      <div className="menu-items login-signup-links">
        {!user && (
          <>
            {signupItem.map((item) => {
              return (
                <li
                  key={item.id}
                  onClick={() => setActive(item.id)}
                  className={active === item.id ? "active" : ""}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </li>
              );
            })}
            {loginItem.map((item) => {
              return (
                <li
                  key={item.id}
                  onClick={() => setActive(item.id)}
                  className={active === item.id ? "active" : ""}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </li>
              );
            })}
          </>
        )}

        {user && <ButtonStyled onClick={handleClick}>Logout</ButtonStyled>}
      </div>
    </NavStyled>
  );
};

const ButtonStyled = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: blue;
  color: white;
  cursor: pointer;
`;

const NavStyled = styled.nav`
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 2rem 1.5rem;
  width: 300px;
  height: 100%;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #ffffff;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;

  .user-icon {
    height: 100px;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    background: #fcf6f9;
    border: 2px solid #ffffff;
    padding: 0.2rem;
    box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
  }
  h3 {
    color: rgba(34, 34, 96, 1);
    width: 300px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  p {
    color: rgba(34, 34, 96, 0.6);
  }

  .menu-items {
    display: flex;
    flex: 1;
    flex-direction: column;
    li {
      display: grid;
      grid-template-columns: 40px auto;
      align-items: center;
      margin: 0.6rem 0;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      color: rgba(34, 34, 96, 0.6);
      padding-left: 1rem;
      position: relative;
      i {
        color: rgba(34, 34, 96, 0.6);
        font-size: 1.4rem;
        transition: all 0.4s ease-in-out;
      }
    }
  }

  .active {
    color: rgba(34, 34, 96, 1) !important;
    i {
      color: rgba(34, 34, 96, 1) !important;
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 4px;
      height: 100%;
      background: #222260;
      border-radius: 0 10px 10px 0;
    }
  }
  .login-signup-links {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
  }
`;

export default Navigation;
