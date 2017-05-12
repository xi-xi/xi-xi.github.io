var game = {};
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
    game.camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

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
    	'default_grass.png', 'default_dirt.png',
    	'default_dirt.png', 'default_dirt.png'
    ] );
    textureCube.magFilter = THREE.NearestFilter;
    textureCube.minFilter = THREE.LinearMipMapLinearFilter;

    var material = new THREE.MeshBasicMaterial( { color: 0xffffff, envMap: textureCube } );
    game.cube = new THREE.Mesh( geometry, material );
    var meshes = [
      game.createBlock({x:0, y:0, z:game.VERTUAL_BLOCK_SIZE}, "dirt"),
      game.createBlock({x:game.VERTUAL_BLOCK_SIZE, y:0, z:0}, "dirt")
    ];
    scene.add( game.cube );
    scene.add(meshes[0]);
    scene.add(meshes[1]);

    game.camera.position.y = game.VERTUAL_BLOCK_SIZE * 2;;
    // camera.position.x = 5;
    game.camera.position.z = game.VERTUAL_BLOCK_SIZE * 2;

    game.camera.rotation.x = -3.14 / 4.0;

    // camera.rotation.y = 1.57;

    var render = function () {
      requestAnimationFrame( render );
      game.update();
      renderer.render(scene, game.camera);
    };

    render();
  };
  game.createBlock = function(pos, name){
    if(name == "dirt"){
      var geometry = new THREE.BoxGeometry(
        game.VERTUAL_BLOCK_SIZE,
        game.VERTUAL_BLOCK_SIZE,
        game.VERTUAL_BLOCK_SIZE
      );
      geometry.translate(pos.x, pos.y, pos.z);
      var loader = new THREE.CubeTextureLoader();
      loader.setPath( 'img/textures/' );

      var textureCube = loader.load( [
        'default_dirt.png', 'default_dirt.png',
        'default_grass.png', 'default_dirt.png',
        'default_dirt.png', 'default_dirt.png'
      ] );
      textureCube.magFilter = THREE.NearestFilter;
      textureCube.minFilter = THREE.LinearMipMapLinearFilter;

      var material = new THREE.MeshBasicMaterial( { color: 0xffffff, envMap: textureCube } );
      var mesh = new THREE.Mesh( geometry, material );
      // mesh.position.x = pos.x;
      // mesh.position.y = pos.y;
      // mesh.position.z = pos.z;
      return mesh;
    }
  };
  game.update = function(){
    // game.cube.rotation.x += 0.1;
    // game.cube.rotation.y += 0.1;
//    game.camera.rotation.x += 0.01;
  //  console.log(game.camera.rotation);
  };
  game.onCodeChanged = function(code){
  };
  game._init();
})(game);
