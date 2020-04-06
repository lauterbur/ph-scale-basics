// Copyright 2013-2020, University of Colorado Boulder

/**
 * Main entry point for the 'pH Scale: Basics' sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Sim from '../../joist/js/Sim.js';
import SimLauncher from '../../joist/js/SimLauncher.js';
import PHScaleConstants from '../../ph-scale/js/common/PHScaleConstants.js';
import PHScaleQueryParameters from '../../ph-scale/js/common/PHScaleQueryParameters.js';
import MacroScreen from '../../ph-scale/js/macro/MacroScreen.js';
import Tandem from '../../tandem/js/Tandem.js';
import phScaleBasicsStrings from './phScaleBasicsStrings.js';

// If autoFill query parameter was not in the URL, change the default.
if ( !QueryStringMachine.containsKey( 'autoFill' ) ) {
  PHScaleQueryParameters.autoFill = false;
}

SimLauncher.launch( () => {

  const screens = [
    new MacroScreen( Tandem.ROOT.createTandem( 'macroScreen' ) )
  ];

  const sim = new Sim( phScaleBasicsStrings[ 'ph-scale-basics' ].title, screens, {
    credits: PHScaleConstants.CREDITS
  } );

  sim.start();
} );