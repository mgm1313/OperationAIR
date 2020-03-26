---
slug: ontwerpeisen
title: Programma van Eisen
seo:
  browserTitle: Programma van Eisen
  description: >-
    Met behulp van de MoSCoW methode heeft het team van OperationAIR het
    programma van eisen opgesteld voor de noodoplossing voor het beademen van
    coronapatiënten.
---
# Programma van Eisen Noodoplossing Beademing Coronapatiënten

Met behulp van de MoSCoW methode heeft het team van OperationAIR het Programma van Eisen opgesteld voor de noodoplossing voor het beademen van coronapatiënten.

## Programma van Eisen voor ventilatie van coronapatiënten

### Requirements - Ventilation Settings

<table class="mt-2 block table-auto min-w-full overflow-x-auto">
<thead>
  <tr>
    <th class="px-4 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Must </td>
    <th class="px-4 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Should </td>
    <th class="px-4 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Could </td>
    <th class="px-4 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Won't </td>
  </tr>
  </thead>
  <tbody>
  <tr class="align-top">
    <td class="px-4 py-2 whitespace-no-wrap border-r border-gray-200">
        - Adjustable settings:  
        <div class="pl-3">
          + Freq. 30/min <br />
          + Tv 300 - 700 mL<sup>\\[1]</sup> <br />
          + Pplat < 35 cmH2O <br />
          + Pressure controlled <br />
          + 15cm H2O PEEP<sup>\\[2]</sup> <br />
          + FiO2 → 100% <br />
          + I:E → 1:2 <br />
          + inspiratory flow 1.5L/s
        </div>
        - Error margin ≤ 0.5 cm H20
    </td>
    <td class="px-4 py-2 whitespace-no-wrap border-r border-gray-200"> 
        - freq 35/min <br />
        - Tv 300 - 1000 mL <br />
        - inspiratory flow 2.5L/s <br />
        - 18-22cm H2O PEEP <br />
        - I:E → 1:1 - 1:4
    </td>
    <td class="px-4 py-2 whitespace-no-wrap border-r border-gray-200">
        - Freq. 5 - 30/min <br />
        - 200-1500 <br />
        - 25cm H2O PEEP
    </td>
    <td class="px-4 py-2 whitespace-no-wrap">
        - Weaning <br />
        - Passive/active ventilation switch <i>(too advanced)</i> <br />
        - Measure Pdriving <i>(too advanced)</i> <br />
        - Design disposables
    </td>
  </tr>
  </tbody>
</table>

## Programma van Eisen voor het ontwerp van OperationAIR

### Requirements - Hardware

<table class="mt-2 block min-w-full overflow-x-auto">
<thead>
  <tr>
    <th class="px-4 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Must </td>
    <th class="px-4 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Should </td>
    <th class="px-4 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Could </td>
    <th class="px-4 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Wont </td>
  </tr>
  </thead>
  <tr class="align-top">
    <td class="px-4 py-2 whitespace-no-wrap border-r border-gray-200">
        - HME-filter <br />
        - Flow Sensor <br />
        - Monitor <br />
        - Pressure relief (!!) (45cm H20) <br />
        - Infection control/sterilization <br />
        - expirated air <br />
        - UPS
    </td>
    <td class="px-4 py-2 whitespace-no-wrap border-r border-gray-200">
        - Capnogram
    </td>
    <td class="px-4 py-2 whitespace-no-wrap border-r border-gray-200"></td>
    <td class="px-4 py-2 whitespace-no-wrap border-r border-gray-200"></td>
  </tr>
</table>

### Requirements - Software

<table class="mt-2 block table-auto min-w-full overflow-x-auto">
<thead>
  <tr>
    <th class="px-4 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Must </td>
    <th class="px-4 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Should </td>
    <th class="px-4 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Could </td>
    <th class="px-4 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Wont </td>
  </tr>
  </thead>
  <tr class="align-top">
    <td class="px-4 py-2 whitespace-no-wrap border-r border-gray-200"> 
        - Visualisation (V, P and flow) curves+getallen <br /> 
        - Alarming (when, how and adjustability) <br />
        - Low/high airway pressure (Paw) <br />
        - Low expiratory minute volume(MVe) <br />
        - Inspiratory O2 concentration (FiO2) <br />
        - Expiratory CO2 concentration (etCO2) <br />
        - Teugvolume restrictie
    </td>
    <td class="px-4 py-2 whitespace-no-wrap border-r border-gray-200">
        - High expiratory minute volume(MVe) <br />
        - Capnogram visualisation
    </td>
    <td class="px-4 py-2 whitespace-no-wrap border-r border-gray-200">
        - trends (4, 12 & 24 uur)
    </td>
    <td class="px-4 py-2 whitespace-no-wrap border-r border-gray-200"></td>
  </tr>
</table>

### Requirements - Reliability

<table class="mt-2 block table-auto min-w-full overflow-x-auto">
<thead>
  <tr>
    <th class="px-4 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Must </td>
    <th class="px-4 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Should </td>
    <th class="px-4 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Could </td>
    <th class="px-4 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Wont </td>
  </tr>
  </thead>
  <tr class="align-top">
    <td class="px-4 py-2 whitespace-no-wrap border-r border-gray-200">
       - Reliability: Min. 2 week continuity <br />
        - Electrical safety <br />
        - Compatibility (disposables) <br />
        - Oxygen safety (flamable)
    </td>
    <td class="px-4 py-2 whitespace-no-wrap border-r border-gray-200"></td>
    <td class="px-4 py-2 whitespace-no-wrap border-r border-gray-200"></td>
    <td class="px-4 py-2 whitespace-no-wrap border-r border-gray-200"></td>
  </tr>
</table>

## Referenties

1. Walkey AJ, Goligher EC, Del sorbo L, et al. Low Tidal Volume versus Non-Volume-Limited Strategies for Patients with Acute Respiratory Distress Syndrome. A Systematic Review and Meta-Analysis. Ann Am Thorac Soc. 2017;14(Supplement_4):S271-S279.
2. Walkey AJ, Del sorbo L, Hodgson CL, et al. Higher PEEP versus Lower PEEP Strategies for Patients with Acute Respiratory Distress Syndrome. A Systematic Review and Meta-Analysis. Ann Am Thorac Soc. 2017;14(Supplement_4):S297-S303.
3. Dräger Evita® Infinity® V500 Ventilator ICU Ventilation And Respiratory Monitoring. (2020). \[ebook] Drager, pp.1-8. Available at: [www.draeger.com/](https://www.draeger.com/Products/Content/evita-infinity-v500-ventilator-pi-9051753-en-gb.pdf) \[Accessed 17 March 2020].