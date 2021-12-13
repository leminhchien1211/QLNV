module.exports = mongoose => {
    const Tutorial = mongoose.model(
      "tutorial",
      mongoose.Schema(
        {
          name: String,
          age: Number,
          workplace: String
        },
        { timestamps: true }
      )
    );
  
    return Tutorial;
  };