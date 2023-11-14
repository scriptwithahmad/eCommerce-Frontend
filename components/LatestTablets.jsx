import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const LatestTablets = ({ props }) => {
  const filteredData = props.products.filter(
    (product) => product.category === "Tablets"
  );
  console.log(filteredData);

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <>
      <div className="productHeader">
        <h2>Latest Tablets</h2>
        <span>View All</span>
      </div>
      {filteredData.length === 0 ? (
        <p className="defaultPara">No products have been uploaded yet.</p>
      ) : (
        <Slider className="main-cards" {...settings}>
          {filteredData?.map((v) => {
            return (
              <div key={v.id} className="slide-card">
                <div className="card">
                  <div className="imgDiv">
                    <img src={v.avatar} alt="" />
                  </div>
                  <div className="card-info">
                    <Link href={`/product/${v.slug}`}>
                      <h3>{v.name}</h3>
                    </Link>
                    <p>Rs. {v.price} </p>
                    <span>{v.category} </span>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      )}
    </>
  );
};

export default LatestTablets;