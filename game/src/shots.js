/** Choose a repeatable showcase scene from the URL, as the starter's shot flow does. */
export function stageShot(name, { player, cars, menu, camera }) {
  if (name === 'mission' || name === 'combat' || name === 'chase') {
    const car = cars[1];
    car.position.set(3, 0, 0);
    car.rotation.y = 0;
    player.position.copy(car.position);
    camera.position.set(18, 12, -30);
    menu.style.display = 'none';
    return { paused: false, active: car, yaw: 0.9 };
  }
  if (name === 'end') {
    const car = cars[0];
    car.position.set(6, 0, 0);
    car.rotation.y = -0.6;
    camera.position.set(15, 13, 13);
    menu.style.display = 'none';
    return { paused: false, active: car, yaw: 0.2 };
  }
  player.position.set(1, 0, 0);
  camera.position.set(20, 15, 25);
  return { paused: true, active: null, yaw: 0.5 };
}
