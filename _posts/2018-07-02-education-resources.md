---
layout: post
title: Educational Resources
date: 2018-07-02 00:00:00 -0700
description: Collection of tools for marine chemistry and ocean engineering teaching
img: marine-co2.png
tags: [teaching, education, marine, oceanography, enginering] # add tag
---

### Marine CO<sub>2</sub> system
The marine inorganic carbon or marine CO<sub>2</sub> system is valuable to study for a variety of reasons. From a purely chemical standpoint, CO<sub>2</sub> (carbon dioxide) in the air can react with H<sub>2</sub>O molecules in the ocean to form H<sub>2</sub>CO<sub>3</sub> (carbonic acid). As a diprotic acid, carbonic acid can lose one H<sup>+</sup> (or proton) to form HCO<sub>3</sub><sup>-</sup> (bicarbonate) and a second to form CO<sub>3</sub><sup>2-</sup> (carbonate). The equilibria involved, seen in the snapshot below from [Millero (2007) _The Marine Inorganic Carbon Cycle_](https://pubs.acs.org/doi/abs/10.1021/cr0503557), are governed by acid dissociation constants (k<sub>a</sub> values) which are dependent on temperature, pressure, and salinity.

![](../assets/img/for_posts/millero2007.png)

### Humans and marine inorganic carbon
Moreover, we've been able to measure atmospheric carbon dioxide with remarkably high precision and accuracy since the late 1950s thanks to the pioneering work of Charles David Keeling at Scripps Institution of Oceanography, UC San Diego: [https://scripps.ucsd.edu/programs/keelingcurve/](https://scripps.ucsd.edu/programs/keelingcurve/). And we've been tracking the concomitant increase in marine inorganic carbon for several decades as well (see [Bates _et al._ (2014) _A time-series view of changing ocean chemistry due to ocean uptake of anthropogenic CO<sub>2</sub> and ocean acidification](https://tos.org/oceanography/article/a-time-series-view-of-changing-ocean-chemistry-due-to-ocean-uptake-ofanthro) for more details). We know that the ocean is taking up a substantial percentage of the CO<sub>2</sub> pollution that humans are generating which, in turn, makes the ocean more acidic (related to the equations above).

### Who cares?
A scientifically fascinating side effect of the ocean acidification phenomenon is that, due to the acid dissociation constants (k<sub>a</sub> values) for carbonic acid and bicarbonate ion, at current ocean conditions, bicarbonate ion is the favored form of marine inorganic carbon. And, unfortunately, as ocean pH decreases from its current surface average of ~ 8.1, bicarbonate becomes more and more favored while carbonate becomes less and less favored. And carbonate, as scientists understand it, is the ion that is used in the building blocks of marine calcifiers' shells (like corals, mollusks, and pteropods (AKA sea butterflies), to name a few).

The following interactive graph shows the concentrations of carbonic acid, bicarbonate ion, and carbonate ion as functions of pH when total dissolved inorganic carbon (the sum of all of those species) is equal to 2,200 &mu;mol/kg (a reasonable surface ocean value based on the paper by Bates _et al._ mentioned above). You can zoom into both x- and y-axes to see finer detail and drag the cursor over to see the concentrations of the different species across a wide range of pH.

<div class="resp-container">
    <iframe class="resp-iframe" src="../interactive-pages/marine-co2-equil.html"></iframe>
</div>

To see the equations I used to generate the graph above, you can visit my Jupyter Notebook with the associated code [here](../jupyter-notebooks/Marine CO2 Equilibria, Static.ipynb).
