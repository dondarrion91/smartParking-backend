const i18n = require("../i18n/request.message");

const create = (model) => async (req, res) => {
    const newRecord = new model(req.body);

    try {
        await newRecord.save();

        res.json(newRecord);
    } catch (error) {
        res.json({
            message: i18n.ERROR_MESSAGES.SERVER,
        });
    }
};

const getAll = (model) => async (req, res) => {
    try {
        const records = await model.find();

        res.json(records);
    } catch (error) {
        console.log(error);
        res.json({
            message: i18n.ERROR_MESSAGES.SERVER,
        });
    }
};

const getOne = (model) => async (req, res) => {
    try {
        const record = await model.findOne({
            _id: req.params.id,
        });

        res.json(record);
    } catch (error) {
        res.json({
            message: i18n.ERROR_MESSAGES.NOT_FOUND,
        });
    }
};

const editOne = (model) => async (req, res) => {
    try {
        await model.updateOne(
            {
                _id: req.params.id,
            },
            req.body
        );

        res.json({
            message: i18n.SUCCESS_MESSAGES.EDITED,
        });
    } catch (error) {
        res.json({
            message: i18n.ERROR_MESSAGES.SERVER,
        });
    }
};

const deleteOne = (model) => async (req, res) => {
    try {
        await model.deleteOne({
            _id: req.params.id,
        });

        res.json({
            message: i18n.SUCCESS_MESSAGES.DELETED,
        });
    } catch (error) {
        res.json({
            message: i18n.ERROR_MESSAGES.SERVER,
        });
    }
};

module.exports = {
    create,
    getAll,
    getOne,
    editOne,
    deleteOne,
};
