# ATA-22 Autoflight

## FMGC

- **FMGC:**-There are two interchangeable FMGCs.
- Each FMGC is made of two parts: the Flight Management (FM) part and the Flight Guidance (FG) part.
  - The FM part gives the functions related to flight plan definition, revision and monitoring
  - the FG part gives the functions related to the aircraft control.

## FCU

- The FCU and the MCDUs let the pilots control the functions of the FMGCs. The FAC engagement P/BSWs and the RUDDER TRIM control panel are connected to the FACs

## FAC:

- The computer is divided into three parts:

  - Two virtually identical channels, the COMMAND channel and the MONITOR channel.

  - One independent channel which performs the FIDS functions

### FIDS

- For maintenance purposes, the FIDS centralizes the failure information from
  the various BITE of the AFS computers and provides an interface between these
  BITE and Centralized Fault display Interface Unit (CFDIU) . The Fids functions is only active in FAC 1.

- FIDS is a card physically located in each FAC. Both FACs are
  interchangeable, but only the FAC 1 FIDS is active due to the side 1
  signal...

#### FAC/FM/FG BITE

- As the FAC and FG have a BITE in the CMD and the MONitor
  (MON) sides, the fault analysis is generally made on each side and a synthesis
  is made on the CMD side. Each BITE memorizes the result of the analysis,
  the failure context, the flight leg number, the time and date of each given
  failure. Then the BITE sends the result of the analysis, with a maximum
  of two suspected LRUs in the order of probability, to the FIDS.

- FCU BITE:-Each FCU BITE computes the maintenance status of its related part and
  permanently sends this maintenance data to the FG CMD part.

#### Monitoring of FAC

- FAC monitors the following devices for correct operation. The engagement status of the pushbuttons for the YD, RT, and RTLs Internal monitoring of the computer,acquisition channel, transmission and software (FAC healthy).
  Monitoring of specific failures in transmission and reception of FMGC and ELAC. Monitoring of sensors (LVDT and RVDT). Monitoring of the peripherals ADRIS,LGCIU and SFCC.

- The safety test automatically tests for the correct operation of digital devices and
  safety devices. It is activated on ground only when engines are shut down.
  Done after every power cut off ( 4 seconds) and lasts for a maximum of a
  minute. If the safety test is passed then only the FAC can be engaged.

::: warning Fault Message : Pitch Trim/MCDU/CG disagree:

- In the frame of "take off securing", a Pitch Trim/MCDU/Center of Gravity (CG)
  disagree caution is implemented in FAC, computes a theoretical Trimmable
  Horizontal Stabilizer (THS) position using the MCDU CG.
- This theoretical position is sent to the FWC which compares it with the actual THS position. In case of discrepancy (threshold defined in FWC logics) the “pitch trim / MCDU / CG disagree" alert is triggered.
  - Purpose of this project was to increase reliability of CG input in FMS, THS setting at take-off and reduce the rate of events due to erroneous entries.
  - The real pitch trim value, The pitch trim value calculated by the FAC, based on the CG, The pitch trim value entered in the MCDU.
- A failure of one system is unlikely at the origin of the alert. Therefore there is **no TSM procedure dedicated to this specific ECAM alert.**

:::

## 22-91-00 - FAULT ISOLATION FUNCTION -PRINCIPLE

- The line maintenance of the Automatic Flight System (AFS) is based on the use of
  the Fault Isolation and Detection System (FIDS). The system:


    - Detects, isolates and stores the AFS internal and external faults,

    - initiates and performs the test after replacement of an AFS LRU,
    - initiates and performs the availability test of the category !!! automatic      landing function

### FIDS

- The FIDS will only accept the test request if its ground condition is met (NOSE GEAR PRESSED).

- **LRUs UNDER TEST**: The LRUs under test will only accept the test request if their a own ground conditions are met (NOSE GEAR PRESSED AND ENGINES STOPPED).

- A FIDS card physically located in each Flight Augmentation Computer (FAC), only
  the card located in the FAC1 is activated (by the SIDE 1 signal)

- The purpose of the AFS TEST is to check the integrity of the AFS after replacement of an LRU (line replaceable unit).

- The FIDS card includes:- a CPU (Micro processer and associated circuits), a memory module containing the application program,,; ARINC input/output
  circuits,;-discrete input/output circuits.
- The FIDS serves as the SYSTEM BITE (maintenance data concentrator).

- The FIDS is linked in acquisition and reception to the centralized fault-display
  interface-unit (CFDIU) and is connected to the BITEs of the various AFS computers.

- The BITE diagnosis? and generates a fault message which is sent to the CFDIU.

* The AFS TEST completes the AFS computer monitoring and safety tests.
  This test, which is performed in the FACs and the FMGCs (FM and FG sections)
  consists in:- using the computer safety test results (FAC, FG, FM, FCU and MCDU)
* ?The test of symmetrical discrete inputs : FAC COM and FAC MON, FG COM and
  MON;- the test of the symmetrical ARINC inputs?

### 22-97-00 - LAND CAT III CAPABILITY TEST:

- The purpose of the test is to verify the a capability of the involved.systems to perform a CAT 3 DUAL fail operational automatic landing. It also verifies the takeover and priority pushbutton switches,the A/THR instinctive disconnect pushbutton switches and the warnings associated to the automatic landing.
- LAND TEST function is mainly performed in the FIDS and utilizes FG failure
  detection (snapshot, analysis and reporting). Consequently, the LAND TEST efficiency is identical to the FG BITE efficiency..
- List of LRUs Covered by the FIDS:-All the internal and external LRUs covered by
  the FIDS are listed in the table:-22-91-00

- Safety Tests:-are performed automatically in the FIDS card on the ground after prolonged power supply cutoff (>4s).

## AUTOTHRUST FUNCTION:-

- The A/THR function sends a computed thrust command
  (thrust target) to the Full Authority Digital Engine Control (FADEC) for automatic
  engine control. The A/THR functions are:

  - acquisition and holding of a speed or a Mach number,

  - acquisition and holding of a thrust,

  - reduction of the thrust to idle during descent and flare in final approach,

  - protection against excessive Angle-Of-Attack (AOA) called alpha-floor
    protection, by ordering a maximum thrust when an alpha-floor detection
    signal is received from the Flight Augmentation Computers (FACs).

### AUTOTHRUST LOOP PRINCIPLE:-

- To get the A/THR function, the thrust target
  computed by the Flight Management and Guidance Computers (FMGCs) is chosen
  by the Flight Control Unit (FCU). Then each FCU processor sends, along its own
  bus, the thrust target to the FADEC via the Engine Interface Units (ElUs).

- A/THR pb:-The flight crew uses this pushbutton to arm, activate, or disconnect the
  auto thrust (A/THR). This button illuminates green if the A/THR is armed or active.

### WIND SHEAR DETECTION

- Wind shear is a sudden change of wind velocity / speed over a relatively Shorter distance in atmosphere.

- This can have an adverse effect on aircraft’s performance, during t/o and landing
  phases. FACS generate the wind Shear warning, whenever the energy level of the
  aircraft falls below a predetermined threshold. No sensor is available to detect
  wind shear.

- There are two types of wind shear detection systems, reactive and predictive.
  The reactive wind shear system react to the aircraft being in wind shear and the
  predictive system, such as weather radar, looks ahead to predict a wind shear.
  When encountering a wind shear, on final approach, the AIRCRFAT first enters an
  increasing headwind and updraft.

- The pilot may react by reducing power to bring the aircraft back down.

- But, next the aircraft enters an area of severe downdraft followed by increasing
  tailwind. At this point, it may be too late to develop the thrust required to escape
  before sinking to ground. ( Request watch U tube Video)

- There are three illuminable annunciators on the MCDU front panel:

  - FAIL: This annunciator comes on (amber) when the MCDU has failed,

  - MCDU MENU: This annunciator comes on (white) when sys linked to the display

  - FM: This annunciator comes on when an FM page is not displayed.

- BRT/DIM keys:-The BRT/DIM keys allows brightness adjustment of the screen. The fully decreasing of the brightness switches off the MCDU.

- Top panel annunciators There are five illuminable annunciators across the top
  of the MCDU front panel of which one is Spare and not utilized.

  - (a) FM1 and FM2:-The FM failure annunciators at the top of the MCDU indicate
    when a FM failure occurs. The FM1 failure light on MCDU1 and/or MCDU2 comes
    on (amber)

  - (b) RDY:-This annunciator comes on (green) when the MCDU passes its long-term
    power up or power off reset test after its BRT knob is turned to OFF.

  - (c) IND:-This annunciator comes on (amber) when the selected FM detects an
    independent operation (loss of dual mode) while both FMs are healthy. If either
    FM is failed, the annunciator is not on, regardless of state of the intersystem bus.

- MCDU BITE:-The MCDU does the tests on its processor, memory and display unit.
  If a failure is found by the MCDU BITE:

  - the FAIL annunciator comes on and the display is blank,

  - the MCDU FAIL output discrete is set and sent to the FM part and then
    to FG 1 and FG 2 CMD parts through the crosstalk bus
