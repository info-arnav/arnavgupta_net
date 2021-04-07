import Link from "next/link";
import { useRouter } from "next/router";
import { Dropdown } from "react-bootstrap";
import CustomToggle from "./customToggle";

export default function Signed() {
  const router = useRouter();
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle}></Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item key="profile">
            <Link href="/your-profile">Profile</Link>
          </Dropdown.Item>
          <Dropdown.Item key="bookmarks">
            <Link href="/bookmarks">Bookmarks</Link>
          </Dropdown.Item>
          <Dropdown.Item key="new post">
            <Link href="/dashboard">New Post</Link>
          </Dropdown.Item>
          <Dropdown.Item key="logout">
            <a
              onClick={() => {
                localStorage.removeItem("userData");
                localStorage.removeItem("username");
                location.replace("/");
              }}
            >
              Logout
            </a>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
