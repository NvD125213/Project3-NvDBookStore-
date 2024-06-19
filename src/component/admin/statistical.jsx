import React, { useState, useEffect } from "react";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';
import axios from "axios";
import '../adminCSS/styleTK.css'
import { formatCurrency } from "../../action/formatPriceAction"; 

import { Pie } from "react-chartjs-2";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

const Statistical = () => {
    const [data, setData] = useState({
        labels: [],
        datasets: [
            {
                data: [],
                backgroundColor: []
            }
        ]
    });
    const [statistics, setStatistics] = useState({
        total_orders: 0,
        total_users: 0,
        total_products_sold: 0,
        total_revenue: 0,
    });
    useEffect(() => {
        fetchStatistics();
    }, []);

    const fetchStatistics = async () => {
        try {
            const response = await axios.get(`/api/statical`);
            setStatistics(response.data);
        } catch (error) {
            console.error('Error fetching statistics:', error);
        }
    };
    useEffect(() => {
        axios.get(`/api/product/bestsellers`)
            .then(response => {
                const topProducts = response.data.results;
                const otherQuantity = response.data.otherQuantity;

                const labels = [...topProducts.map(item => item.name), 'Những sản phẩm khác'];
                const quantities = [...topProducts.map(item => item.total_quantity), otherQuantity];
                const colors = ['aqua', 'bloodorange', 'purple'];

                setData({
                    labels: labels,
                    datasets: [
                        {
                            data: quantities,
                            backgroundColor: colors.slice(0, labels.length)
                        }
                    ]
                });
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        size: 16 
                    }
                }
            },
            tooltip: {
                bodyFont: {
                    size: 14 
                },
                titleFont: {
                    size: 16 
                }
            }
        }
    };

    return (
        <div className="statistical">
             <div class="container">
                <div class="row">
                  <div class="col-md-3">
                    <div class="card p-3 mb-2 bg-success text-white">
                      <h5 class="card-title" >Tổng số đơn hàng đã duyệt</h5>
                      <p class="card-text" style={{fontSize: '18px'}}>{statistics.total_orders} đơn hàng</p>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="card bg-info text-white">
                      <h5 class="card-title">Tổng số sản phẩm đã bán</h5>
                      <p class="card-text" style={{fontSize: '18px'}}>{statistics.total_products_sold} sản phẩm</p>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="card bg-secondary text-white">
                      <h5 class="card-title">Số người dùng website</h5>
                      <p class="card-text" style={{fontSize: '18px'}}>{statistics.total_users} user</p>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="card bg-danger text-white">
                      <h5 class="card-title">Tổng doanh thu</h5>
                      <p class="card-text" style={{fontSize: '18px'}}>{formatCurrency(statistics.total_revenue)}</p>
                    </div>
                  </div>
                </div>
            </div>
            <h3>THỐNG KÊ CÁC SẢN PHẨM BÁN CHẠY</h3>
            <div style={{ padding: '20px', width: '80%', maxWidth: '400px' }}>
                <Pie
                    data={data}
                    options={options}
                />
            </div>
        </div>
    );
};

export default Statistical;
