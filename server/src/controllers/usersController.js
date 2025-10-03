import User from "../models/User.js";

/**
 * Get list of all users (admin only)
 */
export const getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password").lean();
    res.status(200).json(users);
  } catch (error) {
    console.error("getUsers error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

/**
 * Update user (e.g., activate/deactivate, change role)
 */
export const updateUser = async (req, res) => {
  const userId = req.params.id;
  const updateData = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Only allow certain fields to be updated securely
    const allowedUpdates = ["name", "role", "isActive", "bio", "avatar"];
    Object.keys(updateData).forEach((key) => {
      if (allowedUpdates.includes(key)) {
        user[key] = updateData[key];
      }
    });

    await user.save();
    const updatedUser = user.toObject();
    delete updatedUser.password; // Remove password from response

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("updateUser error:", error);
    res.status(500).json({ message: "Server error while updating user" });
  }
};

/**
 * Delete user (admin only)
 */
export const deleteUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findByIdAndDelete(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    console.error("deleteUser error:", error);
    res.status(500).json({ message: "Server error while deleting user" });
  }
};
