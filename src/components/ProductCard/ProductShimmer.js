const ProductShimmer = () => {
  return (
    <div className="product-page shimmer-wrapper">

      {/* Image Side */}
      <div className="product-image-wrap">
        <div className="shimmer-block" style={{ width: "300px", height: "350px", borderRadius: "12px" }} />
      </div>

      {/* Info Side */}
      <div className="product-info">
        {/* Category */}
        <div className="shimmer-block" style={{ width: "100px", height: "14px", borderRadius: "6px", marginBottom: "12px" }} />

        {/* Title - two lines */}
        <div className="shimmer-block" style={{ width: "90%", height: "22px", borderRadius: "6px", marginBottom: "8px" }} />
        <div className="shimmer-block" style={{ width: "65%", height: "22px", borderRadius: "6px", marginBottom: "16px" }} />

        {/* Rating */}
        <div className="shimmer-block" style={{ width: "160px", height: "16px", borderRadius: "6px", marginBottom: "16px" }} />

        {/* Price */}
        <div className="shimmer-block" style={{ width: "90px", height: "28px", borderRadius: "6px", marginBottom: "20px" }} />

        {/* Description - four lines */}
        <div className="shimmer-block" style={{ width: "100%", height: "14px", borderRadius: "6px", marginBottom: "8px" }} />
        <div className="shimmer-block" style={{ width: "100%", height: "14px", borderRadius: "6px", marginBottom: "8px" }} />
        <div className="shimmer-block" style={{ width: "100%", height: "14px", borderRadius: "6px", marginBottom: "8px" }} />
        <div className="shimmer-block" style={{ width: "70%",  height: "14px", borderRadius: "6px", marginBottom: "32px" }} />

        {/* Buttons */}
        <div style={{ display: "flex", gap: "16px" }}>
          <div className="shimmer-block" style={{ width: "140px", height: "44px", borderRadius: "8px" }} />
          <div className="shimmer-block" style={{ width: "140px", height: "44px", borderRadius: "8px" }} />
        </div>
      </div>

    </div>
  );
};

export default ProductShimmer;