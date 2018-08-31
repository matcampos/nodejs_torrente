module.exports = () => {
    this.getProdutos = (connection, callback) => {
        connection.query("select * from produto", callback);
    }
    return this;
}