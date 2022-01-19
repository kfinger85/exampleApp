
    <!-- Sidebar -->
    <div id="mySidebar" class="sidebar">
    <script src="{{url('js/sidebar.js')}}"></script>
      <a href="javascript:void(0)" class="closebtn" onclick="toogleNav()">&times;</a>
      <a href="/"> Home </a>
      <a href="phpsandbox"> phpsandbox </a>
      <a href="listeners"> listeners </a>
      <a href="react"> react </a>
      <a href="map">map</a>
      <a id= 'server' class="tooltip">
        Server Info
        <span class="tooltiptext">
          <?php
          echo $_SERVER['PHP_SELF'];
          echo "<br>";
          echo "<span class='name'>SERVER_NAME:  " . $_SERVER['SERVER_NAME'] . '</span>';
          echo "<br>";
          echo '<span>HTTP_HOST:  ' . $_SERVER['HTTP_HOST'] . '</span>';
          ?>
        </span>
      </a>
    </div>
