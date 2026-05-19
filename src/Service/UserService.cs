public class UserService {
    public void UpdateUser(User user) {
        // Add validation for user object
        if (user == null || string.IsNullOrEmpty(user.Name)) {
            throw new ArgumentException("Invalid user data");
        }
        // Existing code to update user
    }
}