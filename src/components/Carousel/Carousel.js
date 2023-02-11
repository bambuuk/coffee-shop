import {
  useState,
} from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Carousel.scss';

const screenWidth = window.screen.width;
const ITEM_WIDTH = screenWidth > 575 ? 450 : 250;
// const ITEM_WIDTH = 450;

function Carousel() {
  const [items] = useState([
    { url: 'https://m.media-amazon.com/images/I/71TcI6NptNL.jpg', id: '1' },
    { url: 'https://i.ebayimg.com/images/g/LoIAAOSwi3Fgw1NI/s-l500.png', id: '2' },
    { url: 'https://i.ebayimg.com/thumbs/images/g/gKwAAOSw0Vxipz0Z/s-l300.jpg', id: '3' },
  ]);
  const [offset, setOffset] = useState(0);

  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      let newOffset = currentOffset + ITEM_WIDTH;
      if (newOffset === 450) {
        newOffset = -((items.length - 1) * 450);
      }
      return Math.min(newOffset, 0);
    });
  };

  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      let newOffset = currentOffset - ITEM_WIDTH;
      const maxOffset = -(ITEM_WIDTH * (items.length - 1));
      if (newOffset < maxOffset) {
        newOffset = 0;
      }
      return Math.max(newOffset, maxOffset);
    });
  };

  const imgsList = items.map((item) => {
    return (
      <img
        key={item.id}
        className="carousel__item"
        src={item.url}
        alt="Coffee Beans"
        style={{ minWidth: `${ITEM_WIDTH}px`, maxWidth: `${ITEM_WIDTH}px` }}
      />
    );
  });

  return (
    <div className="carousel">
      <div className="container">
        <div className="carousel__wrapper">
          <FaChevronLeft className="carousel__arrow" onClick={handleLeftArrowClick} />
          <div className="carousel__window">
            <div
              className="carousel__list-items"
              style={{
                transform: `translateX(${offset}px)`,
              }}
            >
              {imgsList}
            </div>
          </div>
          <FaChevronRight className="carousel__arrow" onClick={handleRightArrowClick} />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
