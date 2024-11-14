exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAdminData = (req, res) => {
    res.json({ message: 'Admin-specific data' });
};

exports.getEmployeeData = (req, res) => {
    res.json({ message: 'Employee-specific data' });
};
