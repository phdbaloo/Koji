import React from 'react';
import './modal.css';

function Modal({ shown, close, passData }) {
    return shown ? (
      <div
        className="modalbg"
        onClick={() => {
          close();
        }}
      >
        <div
          className="modal-content"
          onClick={e => {
            e.stopPropagation();
          }}
        >
          <h1>{passData.title}</h1>
          <h4>Written by User {passData.userId}</h4>
          <p>{passData.body}</p>


          <p>
                Voluptas optio autem ipsam iusto est. Ut delectus sint quia eos. Nihil accusantium consequatur recusandae qui accusantium velit. Et nesciunt expedita qui. Itaque omnis dolore perspiciatis. Officia modi aliquid saepe.

                Laborum ipsa ipsum sint et vitae. Suscipit suscipit qui ea reiciendis voluptate veniam inventore soluta. Non dolorum saepe ut dignissimos.

                Qui excepturi rerum deleniti error ea. Repellat similique voluptatem ut labore vero nesciunt aliquid est. Commodi fugiat rerum error vero unde quis qui nisi. Minus maiores rerum beatae aut. Laborum ut minima eaque est atque. Quae quisquam quasi accusamus.
                </p>
        </div>
      </div>
    ) : null;
  }

export default Modal;