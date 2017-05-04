(function(game){
  game.VERTUAL_BLOCK_SIZE = 128;
  game.player = {};
  game._init = function(){
    game.player.position = new THREE.Vector3();
    game.player.height = game.VERTUAL_BLOCK_SIZE * 1.75;
    game._init3d();
    $('#code').on("change", function() {
      game.onCodeChanged($('#code').val());
    });
  };
  game._init3d = function(){
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    var geometry = new THREE.BoxGeometry(
      game.VERTUAL_BLOCK_SIZE,
      game.VERTUAL_BLOCK_SIZE,
      game.VERTUAL_BLOCK_SIZE
    );
    var loader = new THREE.CubeTextureLoader();
    loader.setPath( 'img/textures/' );

    var textureCube = loader.load( [
    	'default_dirt.png', 'default_dirt.png',
    	'default_glass.png', 'default_dirt.png',
    	'default_dirt.png', 'default_dirt.png'
    ] );

    var material = new THREE.MeshBasicMaterial( { color: 0xffffff, envMap: textureCube } );
    game.cube = new THREE.Mesh( geometry, material );
    scene.add( game.cube );

    // camera.position.y = 5;
    // camera.position.x = 5;
    camera.position.z = game.VERTUAL_BLOCK_SIZE * 2;
    // camera.rotation.x = -1.57;
    // camera.rotation.y = 1.57;

    var render = function () {
      requestAnimationFrame( render );
      game.update();
      renderer.render(scene, camera);
    };

    render();
  };
  game.update = function(){
    // game.cube.rotation.x += 0.1;
    // game.cube.rotation.y += 0.1;
  };
  game.onCodeChanged = function(code){
  };
  game._init();
})({});
