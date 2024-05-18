import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

type CustomSelectProps = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  users: User[];
};

const UserSelect: React.FC<CustomSelectProps> = ({ user, setUser, users }) => {
  const handleChange = (event: SelectChangeEvent) => {
    const selectedUser = users.find(
      (user) => user?.name === event.target.value
    );
    if (selectedUser) setUser(selectedUser);
  };

  return (
    <div>
      <p>名前を選択してください</p>
      <FormControl fullWidth>
        <Select
          className="text-3xl"
          onChange={handleChange}
          value={user ? user.name : ""}
        >
          {users.map((user: User) => (
            <MenuItem key={user?.id} value={user?.name}>
              {user?.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default UserSelect;
