import { Avatar, Badge } from "antd";

export const UserAvatar = (props) => {
  return (
    <>
      {props.badgeCount > 0 ? (
        <span>
          <Badge count={props.badgeCount}>
            <Avatar size={64} className="avatarWithNotifications">
              <p>M</p>
            </Avatar>
          </Badge>{" "}
        </span>
      ) : (
        <span>
          <Badge dot>
            <Avatar size={64} className="avatar">
              <p>M</p>
            </Avatar>
          </Badge>
        </span>
      )}
    </>
  );
};
