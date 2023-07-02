import {IInputs, IOutputs} from "./generated/ManifestTypes";

export class hebrewLabelControl implements ComponentFramework.StandardControl<IInputs, IOutputs> {

    /**
     * Empty constructor.
     */
    private _notifyOutputChanged: () => void
    private _divElem: HTMLDivElement
    constructor()
    {

    }

    /**
     * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
     * Data-set values are not initialized here, use updateView.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
     * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
     * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
     * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
     */
    public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container:HTMLDivElement): void
    {
        notifyOutputChanged()
        this._divElem = document.createElement("div")
        this._divElem.textContent = context.parameters.textLabel.formatted!

        // ------------------------- Div Size --------------------------------
        context.mode.trackContainerResize(true)
        console.log(context.mode.allocatedHeight)
        console.log(context.mode.allocatedWidth)
        this._divElem.style.height = `${context.mode.allocatedHeight}px`
        this._divElem.style.width = `${context.mode.allocatedWidth}px`

       
        // ------------------------- text direction --------------------------
        this._divElem.style.direction = context.parameters.textDirection.raw!
        

        // ------------------------- background color ------------------------
        if (context.parameters.backgroundColor.raw!.length > 0) {
            this._divElem.style.backgroundColor = `${context.parameters.backgroundColor.raw!}`
        }
         // ------------------------- Font Styilng ---------------------------
         this._divElem.style.fontSize = `${context.parameters.fontSize.raw}px`
         this._divElem.style.textAlign = `${context.parameters.textAlign.raw}`
         // ------------------------- border styling -------------------------
                
        this._divElem.style.borderTop = `${context.parameters.borderTop.raw!}px solid` || "1px solid"
        this._divElem.style.borderBottom = `${context.parameters.borderBottom.raw!}px solid` || "1px"
        this._divElem.style.borderRight = `${context.parameters.borderRight.raw!}px solid` || "1px"
        this._divElem.style.borderLeft = `${context.parameters.borderLeft.raw!}px solid` || "1px"
        this._divElem.style.borderRadius = `${context.parameters.borderRadius.raw!}px` || "1px"

        // ------------------------- Padding styling -------------------------

        this._divElem.style.paddingTop = `${context.parameters.paddingTop.raw!}px` || "1px"
        this._divElem.style.paddingBottom = `${context.parameters.paddingBottom.raw!}px` || "1px"
        this._divElem.style.paddingRight = `${context.parameters.paddingRight.raw!}px` || "1px"
        this._divElem.style.paddingLeft = `${context.parameters.paddingLeft.raw!}px` || "1px"
        // Add control initialization code
        container.appendChild(this._divElem)
    }


    /**
     * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
     */
    public updateView(context: ComponentFramework.Context<IInputs>): void
    {

        context.mode.trackContainerResize(true)
        console.log(context.mode.allocatedHeight)
        console.log(context.mode.allocatedWidth)
        this._divElem.style.height = `${context.mode.allocatedHeight}px`
        this._divElem.style.width = `${context.mode.allocatedWidth}px`
        // Add code to update control view
        this._divElem.textContent = context.parameters.textLabel.formatted!
        // ------------------------- text direction --------------------------
        this._divElem.style.direction = context.parameters.textDirection.raw!
        
        
        
        // ------------------------- background color ------------------------
        if (context.parameters.backgroundColor.raw!.length > 0) {
            this._divElem.style.backgroundColor = `${context.parameters.backgroundColor.raw!}`
        }
        // ------------------------- Font Styilng ---------------------------
        this._divElem.style.fontSize = `${context.parameters.fontSize.raw}px`
        this._divElem.style.textAlign = `${context.parameters.textAlign.raw}`
        // ------------------------- border styling -------------------------
   
        this._divElem.style.borderTop = `${context.parameters.borderTop.raw!}px solid` || "1px solid"
        this._divElem.style.borderBottom = `${context.parameters.borderBottom.raw!}px solid` || "1px"
        this._divElem.style.borderRight = `${context.parameters.borderRight.raw!}px solid` || "1px"
        this._divElem.style.borderLeft = `${context.parameters.borderLeft.raw!}px solid` || "1px"
        this._divElem.style.borderRadius = `${context.parameters.borderRadius.raw!}px` || "1px"

        // ------------------------- Padding styling -------------------------

        this._divElem.style.paddingTop = `${context.parameters.paddingTop.raw!}px` || "1px"
        this._divElem.style.paddingBottom = `${context.parameters.paddingBottom.raw!}px` || "1px"
        this._divElem.style.paddingRight = `${context.parameters.paddingRight.raw!}px` || "1px"
        this._divElem.style.paddingLeft = `${context.parameters.paddingLeft.raw!}px` || "1px"
    }

    /**
     * It is called by the framework prior to a control receiving new data.
     * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
     */
    public getOutputs(): IOutputs
    {
        return {};
    }

    /**
     * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
     * i.e. cancelling any pending remote calls, removing listeners, etc.
     */
    public destroy(): void
    {
        // Add code to cleanup control if necessary
    }
}
