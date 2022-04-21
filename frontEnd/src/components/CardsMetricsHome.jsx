import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getCategoriesIncome } from "../helpers/get-categories-income";
export default function CardsMetricsHome({ fixedIncome, category }) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategoriesIncome().then(({ data }) => {
      setCategories(data.data);
    });
  }, []);
  console.log(categories, "categorieas");
  console.log(category, "category id");

  const loQueGasto = 25620;
  const percentageIncome = ((loQueGasto * 100) / fixedIncome).toFixed(2);
  return (
    <div className="col-md-10 w-100 pl-0 ">
      <div className="row ">
        <div className=" col-lg-4 m-auto">
          <Link to={"/home"} style={{ textDecoration: "none" }}>
            <div className="card l-bg-cherry" id="cardHome">
              <div className="card-statistic-3 p-2 ">
                <div className="card-icon card-icon-large">
                  <i className="fas fa-shopping-cart"></i>
                </div>
                <div className="mb-4">
                  <h5 className="card-title mb-0">Gastos</h5>
                </div>
                <div className="row align-items-center mb-2 d-flex">
                  <div className="col-8">
                    <h2 className="d-flex align-items-center mb-0">{}</h2>
                  </div>
                  <div className="col-4 text-right">
                    <span>
                      {percentageIncome} % <i className="fa fa-arrow-up"></i>
                    </span>
                  </div>
                </div>
                <div
                  className="progress mt-1 "
                  data-height="8"
                  style={{ height: "8px" }}
                >
                  <div
                    className="progress-bar l-bg-cyan"
                    role="progressbar"
                    data-width="25%"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: `${percentageIncome}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className=" col-lg-4 m-auto">
          <Link to={"/home"} style={{ textDecoration: "none" }}>
            <div className="card l-bg-green-dark" id="cardHome">
              <div className="card-statistic-3 p-2 ">
                <div className="card-icon card-icon-large">
                  <i className="fas fa-shopping-cart"></i>
                </div>
                <div className=" d-flex ">
                  <h5 className="card-title ">Ingreso fijo</h5>
                  <h5 className=" col-4 text-right  mb-3 ml-auto ">
                    $ {fixedIncome}
                  </h5>
                </div>
                <div className=" d-flex ">
                  <h5 className="card-title ">Categoría</h5>
                  <h5 className="text-right  mb-2 ml-auto ">
                    {categories
                      ? categories.map((categ) =>
                          categ.id == category ? categ.category : ""
                        )
                      : ""}
                  </h5>
                </div>
                <div className="row  mb-2 d-flex"></div>
                <div
                  className="mt-1 "
                  data-height="8"
                  style={{ height: "8px" }}
                >
                  <div
                    className="progress-bar l-bg-cyan"
                    role="progressbar"
                    data-width="25%"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className=" col-lg-4 m-auto">
          <Link to={"/home"} style={{ textDecoration: "none" }}>
            <div className="card" id="cardHome">
              <div className="card-statistic-3 p-2 ">
                <div className="card-icon card-icon-large">
                  <i className="fas fa-shopping-cart"></i>
                </div>
                <div className="mb-4">
                  <h5 className="card-title mb-0">Gastos</h5>
                </div>
                <div className="row align-items-center mb-2 d-flex">
                  <div className="col-8">
                    <h2 className="d-flex align-items-center mb-0">{}</h2>
                  </div>
                  <div className="col-4 text-right">
                    <span>
                      {2}% <i className="fa fa-arrow-up"></i>
                    </span>
                  </div>
                </div>
                <div
                  className="progress mt-1 "
                  data-height="8"
                  style={{ height: "8px" }}
                >
                  <div
                    className="progress-bar l-bg-cyan"
                    role="progressbar"
                    data-width="25%"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: `2%` }}
                  ></div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
