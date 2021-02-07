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
