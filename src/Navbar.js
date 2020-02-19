import React from 'react';
import './App.css';

function Navbar() {
    return(
        <div class="pos-f-t">
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-dark p-4">
      <h4 class="text-white">Para mas informacion contactarse a</h4>
      <span class="text-muted">
          cordobamartingonzalo@gmail.com
          <p />
          <button type="button" class="btn btn-outline-light"><a href="https://www.linkedin.com/in/martingonzalocordoba21/">LinkedIn</a></button>
          
      </span>
    </div>
  </div>
  <nav class="navbar navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>

  
</div>
    );
}

export default Navbar;