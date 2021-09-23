<template>
    <div class="md:container py-5 md:max-w-3xl  px-4 mx-auto">
        <div class="heading">Choose notification's context</div>
        <div class="mb-8 overflow-hidden border-3 border-black rounded-2xl">
            <div class="btn-container mb-[-3px] mr-[-3px]">
                <button
                    v-for="{value, alias, name} in contexts"
                    :key="`context-${alias}`"
                    class="btn border-r-3 border-b-3 group"
                    :class="{[`btn-${value}`]: true}"
                    @click="notificationContext = value"
                >
                    <input
                        type="checkbox"
                        :checked="notificationContext === value"
                        class="peer block opacity-0 -left-full absolute z-0"
                    >
                    <span
                        class="icon absolute transition-transform right-full transform
                            group-hover:translate-x-2.5 peer-checked:translate-x-5"
                    >
                        <fa-icon icon="arrow-right" />
                    </span>
                    {{ name }}
                </button>
            </div>
        </div>

        <div class="heading mb-4">Provide notification's content</div>
        <div class="mb-4">
            <div class="relative">
                <input
                    id="title-control"
                    v-model.lazy="title"
                    type="text"
                    placeholder="title"
                    class="control peer mb-6"
                />
                <label
                    for="title-control"
                    class="floating-label"
                >Title</label>
            </div>
            <div class="relative">
                <textarea
                    id="description"
                    v-model="description"
                    placeholder="description"
                    class="control peer"
                />
                <label
                    for="description"
                    class="floating-label"
                >Message</label>
            </div>
        </div>

        <div class="heading">Choose notification's position</div>
        <div class="mb-8 overflow-hidden border-3 border-black rounded-2xl">
            <div class="btn-container flex-wrap mr-[-3px] mb-[-3px]">
                <button
                    v-for="{ value, name } in positions"
                    :key="`position-${value}`"
                    class="btn w-1/3 border-t-0 border-l-0 transition-colors border-3 hover:bg-primary hover:text-white"
                    :class="{'!bg-success !text-white': value === position}"
                    @click="position = value"
                >{{ name }}</button>
            </div>
        </div>

        <button
            :disabled="isNotifyBtnDisabled"
            class="btn btn-primary border-3
            hover:bg-white hover:text-gray-900
            disabled:bg-gray-400 disabled:text-white disabled:cursor-not-allowed disabled:border-gray-600
            transition-colors rounded-2xl"
            @click="onNotifyBtnClicked"
        >Notify!</button>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { BButtonGroup, BButton, BFormGroup, BFormInput, BFormTextarea } from "bootstrap-vue";

import { NotificationContext, NotificationType, Position } from "@plugin/enums";

type enumVariant<T> = {value: T, alias?: string, name: string};

@Component({
    name: "app",
    components: { BButton, BButtonGroup, BFormGroup, BFormInput, BFormTextarea }
})
export default class AppComponent extends Vue {

    private contexts: enumVariant<NotificationContext>[] = [
        {value: NotificationContext.DEFAULT, name: "Default", alias: "light"},
        {value: NotificationContext.PRIMARY, name: "Primary", alias: "primary"},
        {value: NotificationContext.SECONDARY, name: "Secondary", alias: "secondary"},
        {value: NotificationContext.SUCCESS, name: "Success", alias: "success"},
        {value: NotificationContext.WARNING, name: "Warning", alias: "warning"},
        {value: NotificationContext.DANGER, name: "Danger", alias: "danger"},
        {value: NotificationContext.INFO, name: "Info", alias: "info"},
    ];

    private positions: enumVariant<Position>[] = [
        { value: Position.LEFT_TOP, name: "Left top" },
        { value: Position.CENTER_TOP, name: "Center top" },
        { value: Position.RIGHT_TOP, name: "Right top" },
        { value: Position.LEFT_MIDDLE, name: "Left middle" },
        { value: Position.CENTER_MIDDLE, name: "Center middle" },
        { value: Position.RIGHT_MIDDLE, name: "Right middle" },
        { value: Position.LEFT_BOTTOM, name: "Left bottom" },
        { value: Position.CENTER_BOTTOM, name: "Center bottom" },
        { value: Position.RIGHT_BOTTOM, name: "Right bottom" },
    ];

    private notifyType: NotificationType = NotificationType.TOAST;

    private notificationContext: NotificationContext = NotificationContext.DEFAULT;

    private title = "";

    private description = "";

    private position: Position = Position.RIGHT_MIDDLE;

    public get isNotifyBtnDisabled(): boolean{

        const forbiddenPositions = [Position.LEFT_MIDDLE, Position.CENTER_MIDDLE, Position.RIGHT_MIDDLE];
        if(forbiddenPositions.indexOf(this.position) >= 0) return true;

        if(this.description === "") return true;

        return false;
    }

    public onNotifyBtnClicked(): void{
        this.$notify(
            { text: this.description, header: this.title, context: this.notificationContext },
            { type: this.notifyType, position: this.position }
        );
    }

}
</script>

