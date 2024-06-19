import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import thư viện Axios để gọi API

import { Link, useParams } from 'react-router-dom';
import Product from '../product';
import { PacmanLoader } from 'react-spinners';


const ResultSearch = () => {
  const {query} = useParams()
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchProducts = async () => {
    setLoading(true)
      try {
        const response = await axios.get(`/api/product/search`,{
            params: { search: query }
        });
        setProducts(response.data.products); 
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false)
      }
    };

    fetchProducts();
  }, [query]);
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
    {/* <Header/> */}
    <section className="wrapperMain_content">
        <div className="container-fluid">
            <div className="breadcumbWrapper">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="/search">Tìm kiếm</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">{query}</li>
                    </ol>
                </nav>
            </div>
            <div className="list_data">
                <div className="row">
                 
                    <div className="rightContent col-md-9 homeProduct pt-0">
                        <div className="topStrip mb-1">
                            <p className="mb-0">Có <span className="text-success">{products.length}</span> sản phẩm cho bạn!</p>
                        </div>
                        <div className="productRow d-flex row position-relative" style={{marginBottom: '50px'}}>
                        {loading ? (
                            <div className="position-absolute" >
                                <PacmanLoader color="#18ad42" loading={loading} size={30} />
                            </div>
                        ) : (
                            products.length > 0 ? (
                                products.map((product, index) => (
                                    <div key={index} className="item">
                                        <Product product={product} />
                                    </div>
                                ))
                            ) : (
                                <h3>Không có sản phẩm nào</h3>
                            )
                        )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <Footer /> */}
</div>
  );
};

export default ResultSearch;
