const db = require("../../database/models");
const handlerErrors = require("../../middlewares/handlerErrors");
const { transformDay } = require("../../../helpers/lib");
const dayjs = require("dayjs");
const { Sequelize, sequelize } = require("../../database/models");
const Op = Sequelize.Op;

module.exports = {
  list: (req, res, next) => {
    //una vez decodificado el token y todo , mande por la req el id req.userId
    const { userId: id, body } = req;

    //usar el id para todo
    const dbz = {
      title: "dragon ball z",
      pjs: {
        prota: "goku",
        dragon: "shenglon",
      },
      fecha: "15-03-2000",
    };

    res.json(dbz);
  },
  createFixedIncome: async (req, res, next) => {
    const { userId: id, body } = req;

    try {
      const checkOneFixedIncome = await db.Incomes.findAll({
        where: {
          user_id: id,
        },
        attributes: ["fixed_income"],
      });

      // lo dejo asi por seguridad del backEnd , si bien en el front no dejo mostrar la opccion , un pedido a la api con un token valido
      // funcionaria para que un usuario tenga dos ingresos fijos , en cambio asi no
      if (checkOneFixedIncome.length === 0) {
        const newIncome = await db.Incomes.create({
          ...body,
          user_id: id,
          varied_income: 0,
        });
        let ok;
        let status;
        let statusText;

        if (newIncome) {
          ok = true;
          status = 201;
          statusText = "Created";
        } else {
          ok = false;
          status = 500;
          statusText = "Error interno del servidor";
        }
        const response = {
          meta: {
            ok: ok,
            status: status,
            statusText: statusText,
            url: "",
          },
          data: newIncome,
        };
        res.status(201).json(response);
      } else {
        res.status(405).json({
          meta: {
            ok: false,
            status: 405,
            statusText: "Method no allowed",
            url: "",
          },
          msg: "No puede ingresar otro monto fijo, ya posee uno. Para modificarlo vaya a editar ingreso fijo ",
        });
      }
    } catch (err) {
      console.log(err);
      handlerErrors(err, req, res, next);
    }
  },
  getIncomes: async (req, res, next) => {
    try {
      const { userId: id } = req;

      const incomes = await db.Incomes.findAll({
        where: {
          user_id: id,
        },
      });
      let ok;
      let status;
      let statusText;
      if (incomes) {
        ok = true;
        status = 201;
        statusText = "OK";
      } else {
        ok = false;
        status = 500;
        statusText = "Error interno del servidor";
      }
      const response = {
        meta: {
          ok: ok,
          status: status,
          statusText: statusText,
          length: incomes.length,
          url: "http://localhost:3001/budget/income",
        },
        data: incomes,
      };
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      handlerErrors(err, req, res, next);
    }
  },
  getCategoriesIncome: async (req, res) => {
    try {
      const categories = await db.Categories_income.findAll({
        raw: true,
      });
      let ok;
      let status;
      let statusText;
      if (categories) {
        ok = true;
        status = 201;
        statusText = "OK";
      } else {
        ok = false;
        status = 500;
        statusText = "Error interno del servidor";
      }
      const response = {
        meta: {
          ok: ok,
          status: status,
          statusText: statusText,
          length: categories.length,
          url: "http://localhost:3001/budget/categories_income",
        },
        data: categories,
      };

      categories
        ? res.status(200).json(response)
        : res.status(500).json(response);
    } catch (err) {
      console.log(err);
      handlerErrors(err, req, res, next);
    }
  },

  getCategoriesExpenses: async (req, res, next) => {
    try {
      const categoriesExpenses = await db.Categories_expenses.findAll({
        raw: true,
      });
      let ok;
      let status;
      let statusText;

      if (categoriesExpenses) {
        ok = true;
        status = 201;
        statusText = "OK";
      } else {
        ok = false;
        status = 500;
        statusText = "Error interno del servidor";
      }
      const response = {
        meta: {
          ok: ok,
          status: status,
          statusText: statusText,
          url: "http://localhost:3001/budget/categories_expenses",
        },
        data: categoriesExpenses,
      };
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      handlerErrors(err, req, res, next);
    }
  },
  getExpenseType: async (req, res, next) => {
    try {
      const expenseType = await db.Expense_type.findAll({
        raw: true,
      });
      let ok;
      let status;
      let statusText;

      if (expenseType) {
        ok = true;
        status = 201;
        statusText = "OK";
      } else {
        ok = false;
        status = 500;
        statusText = "Error interno del servidor";
      }
      const response = {
        meta: {
          ok: ok,
          status: status,
          statusText: statusText,
          url: "http://localhost:3001/budget/expense_type",
        },
        data: expenseType,
      };
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      handlerErrors(err, req, res, next);
    }
  },
  updateIncome: async (req, res, next) => {
    try {
      const { userId: id, body } = req;
      const updateIncome = await db.Incomes.findOne({
        where: {
          user_id: id,
        },
      });
      await updateIncome.set("fixed_income", body.fixed_income);
      await updateIncome.set("varied_income", 0);
      await updateIncome.set("category_inc_id", body.category_inc_id);
      await updateIncome.set("description", body.description);
      await updateIncome.save();
      let ok;
      let status;
      let statusText;
      if (updateIncome) {
        ok = true;
        status = 201;
        statusText = "OK";
      } else {
        ok = false;
        status = 304;
        statusText = "Error interno del servidor";
      }
      const response = {
        meta: {
          ok: ok,
          status: status,
          statusText: statusText,
          url: "http://localhost:3001/budget/update_income",
        },
        data: updateIncome,
      };
      updateIncome
        ? res.status(200).json(response)
        : res.status(304).json(response);
    } catch (err) {
      console.log(err);
      handlerErrors(err, req, res, next);
    }
  },
  createExpense: async (req, res, next) => {
    try {
      console.log("createExpense");
      const { userId: id, body } = req;
      console.log(id);
      console.log(body);
      const newExpense = await db.Expenses.create({
        user_id: id,
        ...body,
      });
      let ok;
      let status;
      let statusText;
      if (newExpense) {
        ok = true;
        status = 201;
        statusText = "OK";
      } else {
        ok = false;
        status = 500;
        statusText = "Error interno del servidor";
      }
      const response = {
        meta: {
          ok: ok,
          status: status,
          statusText: statusText,
          url: "http://localhost:3001/budget/create_expense",
        },
        data: newExpense,
      };
      newExpense
        ? res.status(200).json(response)
        : res.status(500).json(response);
    } catch (err) {
      console.log(err);
      handlerErrors(err, req, res, next);
    }
  },
  getExpenses: async (req, res, next) => {
    try {
      const { userId: id, query } = req;
      console.log(query);
      console.log(id);
      /// la fecha tendria que venir por la query asi el usuario puede ir pidiendo las fechas que quiera
      //si no tendria que hacer un funcion por cada fecha, como la de abajo => getAllExpenses
      const limit = 10;
      let page;
      if (!(query.page !== "undefined") || !(query.page !== undefined)) {
        page = query.page - 1;
      }
      console.log(query.page, "query.page");
      const date = new Date();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      let initialDate = `${year}-${month < 10 ? "0" + month : month}-01`;
      let endDate = `${year}-${month < 10 ? "0" + (month + 1) : month + 1}-01`;

      //si viene sin fechas especificas le pongo las del mes actual
      if (
        !(query.initialDate == undefined || query.initialDate == "undefined") &&
        !(query.endDate == undefined || query.endDate == "undefined")
      ) {
        console.log("es igual que las fechas undefinded");
        initialDate = query.initialDate;
        endDate = query.endDate;
      }
      // pedido para pa sección de gastos con paginado
      const queryDb = {
        attributes: ["id", "amount", "description", "createdAt"],
        where: {
          user_id: id,
          createdAt: {
            [Op.between]: [initialDate, endDate],
          },
        },
        include: [
          {
            model: db.Categories_expenses,
            as: "categoryExpense",
            attributes: ["category"],
          },
          {
            model: db.Expense_type,
            as: "expenseType",
            attributes: ["type"],
          },
        ],
        order: [["createdAt", "ASC"]],
        raw: true,
        offset: page * limit,
        limit: limit,
      };
      if (page == "undefined" || page == undefined) {
        delete queryDb.offset;
      }
      // si los 3 vienen undefined es que viene el pedido del home
      if (
        query.page == "undefined" &&
        query.initialDate == "undefined" &&
        query.endDate == "undefined"
      ) {
        delete queryDb.where.createdAt;
        queryDb.order = [["createdAt", "DESC"]];
        delete queryDb.offset;
      }
      console.log(queryDb);
      const { count, rows } = await db.Expenses.findAndCountAll({ ...queryDb });

      let ok;
      let status;
      let statusText;
      if (rows.length !== 0) {
        ok = true;
        status = 201;
        statusText = "OK";
      } else {
        ok = false;
        status = 500;
        statusText = "Error interno del servidor";
      }
      const response = {
        meta: {
          ok: ok,
          status: status,
          statusText: statusText,
          total: Object.keys(query).length == 0 ? rows.length : count,
          url: "http://localhost:3001/budget/expenses",
        },
        data: rows,
      };
      rows.length !== 0
        ? res.status(200).json(response)
        : res.status(500).json(response);
    } catch (err) {
      console.log(err);
      handlerErrors(err, req, res, next);
    }
  },
  getAllExpenses: async (req, res, next) => {
    try {
      const { userId: id } = req;
      console.log(id);

      const expenses = await db.Expenses.findAll({
        where: {
          user_id: id,
        },
        raw: true,
      });
      let ok;
      let status;
      let statusText;
      if (expenses.length !== 0) {
        ok = true;
        status = 201;
        statusText = "OK";
      } else {
        ok = false;
        status = 500;
        statusText = "Error interno del servidor";
      }
      const response = {
        meta: {
          ok: ok,
          status: status,
          statusText: statusText,
          length: expenses.length,
          url: "http://localhost:3001/budget/all_expenses",
        },
        data: expenses,
      };
      expenses.length !== 0
        ? res.status(200).json(response)
        : res.status(500).json(response);
    } catch (err) {
      console.log(err);
      handlerErrors(err, req, res, next);
    }
  },
  getLineGraphicExpenses: async (req, res, next) => {
    try {
      const { userId: id, query } = req;
      console.log(query);
      console.log(id);
      const date = new Date();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      let initialDate = `${year}-${month < 10 ? "0" + month : month}-01`;
      let endDate = `${year}-${month < 10 ? "0" + (month + 1) : month + 1}-01`;

      if (
        !(query.initialDate == "undefined") &&
        !(query.endDate == "undefined")
      ) {
        initialDate = query.initialDate;
        endDate = query.endDate;
      }
      console.log(initialDate, 222);
      console.log(endDate, 222);
      let where = {
        user_id: id,
        createdAt: {
          [Op.between]: [initialDate, endDate],
        },
      };
      if (query.fixedExpenses == "1") {
        where.type_id = 1;
      }
      if (query.flexibleExpenses == "2") {
        where.type_id = 2;
      }
      if (query.savingExpenses == "3") {
        where.type_id = 3;
      }
      console.log(where);
      const expenses = await db.Expenses.findAll({
        attributes: [
          "createdAt",
          [Sequelize.fn("sum", sequelize.col("amount")), "totalForDay"],
          [
            Sequelize.fn("DATE_FORMAT", sequelize.col("createdAt"), "%d"),
            "day",
          ],
        ],
        where: where,
        group: [
          Sequelize.fn("DATE_FORMAT", sequelize.col("createdAt"), "%Y-%m-%d"),
        ],
        order: [["createdAt", "ASC"]],
        raw: true,
      });

      let ok;
      let status;
      let statusText;
      if (expenses.length !== 0) {
        ok = true;
        status = 201;
        statusText = "OK";
      } else {
        ok = false;
        status = 500;
        statusText = "Error interno del servidor";
      }
      const response = {
        meta: {
          ok: ok,
          status: status,
          statusText: statusText,
          total: expenses.length,
          url: "http://localhost:3001/budget/expenses_line_graphic",
        },
        data: expenses,
      };
      //console.log(expenses);
      expenses.length !== 0
        ? res.status(200).json(response)
        : res.status(500).json(response);
    } catch (err) {
      console.log(err);
      handlerErrors(err, req, res, next);
    }
  },
};
