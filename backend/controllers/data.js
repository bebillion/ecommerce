import products from '../data/products.json' assert { type: 'json' };

const getAllData = async (req, res) => {
    try {
        // Fetch data from products.json
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving data", error });
    }
};

export { getAllData };
