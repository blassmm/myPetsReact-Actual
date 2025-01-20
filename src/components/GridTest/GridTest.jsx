import "./_gridtest.css";

const GridTest = () => {
  return (
    <div className="grid-container">
      <div className="card">
        <h2 className="card-title">
          Título de la Cardsdasdsadasdsadasdasdasdasdasdasd asdasd
        </h2>
        <img
          src="https://www.fdd.cl/wp-content/uploads/2017/09/Test.jpg"
          alt="Imagen aleatoria"
          className="card-image"
        />
        <p className="card-description">
          Esta es una descripción de la card.
          Aquíssssssssssssssssssssssssssssssssss
          sssssssssssssssssada
          aaaaaasadasdad sadsadasdasdaaaassssssssssssssssssss
          sssssssssssssssssadas
          sssssssssssssssssada.
        </p>
      </div>

      <div className="card">
        <h2 className="card-title">Otra Cardd ddddddddd</h2>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png"
          alt="Imagen aleatoria"
          className="card-image"
        />
        <p className="card-description">
          Descripción de otra card con contenido diferente.
        </p>
      </div>

      <div className="card">
        <h2 className="card-title">Card más</h2>
        <img
          src="https://img.freepik.com/foto-gratis/hoja-otono-cayendo-revelando-intrincada-vena-hoja-generada-ia_188544-9869.jpg"
          alt="Imagen aleatoria"
          className="card-image"
        />
        <p className="card-description">
          Aquí también puedes agregar más texto o información en cada card.
        </p>
      </div>
    </div>
  );
};
export default GridTest;
