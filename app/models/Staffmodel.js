module.exports = mongoose => {
    const Staff = mongoose.model(
      "Staff",
      mongoose.Schema(
        {
          name: String,
          age: Number,
          workplace: String
        },
        { timestamps: true }
      )
    );
  
    return Staff;
  };