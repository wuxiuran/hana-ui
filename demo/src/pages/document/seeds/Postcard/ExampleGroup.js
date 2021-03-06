import React, {Component} from 'react';
import {Postcard, PostcardGroup, Image} from 'hana-ui';

const styles = {
  width: 200
};

/**
 * @en
 * Group
 *
 * PostcardGroup with severa postcards.
 *
 * @cn
 * 明信片组
 *
 * 明信片组，包含一组明信片。
 */

export default class ExampleBase extends Component {
  render() {
    return (
      <div>
        <PostcardGroup>
          <Postcard title="Doge1" style={styles}>
            <Image src="https://t4.kn3.net/taringa/5/C/0/6/C/9/DogeDogOficial/59C.jpg" fullWidth />
          </Postcard>
          <Postcard title="Doge2" style={styles}>
            <Image src="https://t4.kn3.net/taringa/5/C/0/6/C/9/DogeDogOficial/59C.jpg" fullWidth />
          </Postcard>
          <Postcard title="Doge3" style={styles}>
            <Image src="https://t4.kn3.net/taringa/5/C/0/6/C/9/DogeDogOficial/59C.jpg" fullWidth />
          </Postcard>
        </PostcardGroup>
      </div>
    );
  }
}
