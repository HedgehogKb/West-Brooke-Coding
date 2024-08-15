function interact(t) {
    t.setCanceled(true);
    var mainItem = t.player.getMainhandItem()
    if (mainItem != null) {
        t.player.setMainhandItem(mainItem.setStackSize(mainItem.
getMaxStackSize()));
    }
}

Thu Aug 15 18:25:51 EDT 2024 tab 4:
java.lang.ClassCastException: Cannot cast jdk.nashorn.internal.runtime.Undefined to noppes.npcs.api.item.IItemStack
	at java.lang.invoke.MethodHandleImpl.newClassCastException(MethodHandleImpl.java:361)
	at java.lang.invoke.MethodHandleImpl.castReference(MethodHandleImpl.java:356)
	at jdk.nashorn.internal.scripts.Script$Recompilation$1084$21A$\^eval\_.interact(<eval>:5)
	at jdk.nashorn.internal.runtime.ScriptFunctionData.invoke(ScriptFunctionData.java:659)
	at jdk.nashorn.internal.runtime.ScriptFunction.invoke(ScriptFunction.java:494)
	at jdk.nashorn.internal.runtime.ScriptRuntime.apply(ScriptRuntime.java:393)
	at jdk.nashorn.api.scripting.ScriptObjectMirror.callMember(ScriptObjectMirror.java:199)
	at jdk.nashorn.api.scripting.NashornScriptEngine.invokeImpl(NashornScriptEngine.java:386)
	at jdk.nashorn.api.scripting.NashornScriptEngine.invokeFunction(NashornScriptEngine.java:190)
	at noppes.npcs.controllers.ScriptContainer.run(ScriptContainer.java:151)
	at noppes.npcs.controllers.ScriptContainer.run(ScriptContainer.java:108)
	at noppes.npcs.controllers.data.PlayerScriptData.runScript(PlayerScriptData.java:88)
	at noppes.npcs.EventHooks.onPlayerInteract(EventHooks.java:307)
	at noppes.npcs.ScriptPlayerEventHandler.invoke(ScriptPlayerEventHandler.java:108)
	at net.minecraftforge.eventbus.ASMEventHandler_441_ScriptPlayerEventHandler_invoke_RightClickBlock.invoke(.dynamic)
	at net.minecraftforge.eventbus.ASMEventHandler.invoke(ASMEventHandler.java:85)
	at net.minecraftforge.eventbus.EventBus.post(EventBus.java:302)
	at net.minecraftforge.eventbus.EventBus.post(EventBus.java:283)
	at net.minecraftforge.common.ForgeHooks.onRightClickBlock(ForgeHooks.java:838)
	at net.minecraft.server.management.PlayerInteractionManager.func_219441_a(PlayerInteractionManager.java:318)
	at net.minecraft.network.play.ServerPlayNetHandler.func_184337_a(ServerPlayNetHandler.java:958)
	at net.minecraft.network.play.client.CPlayerTryUseItemOnBlockPacket.func_148833_a(SourceFile:36)
	at net.minecraft.network.play.client.CPlayerTryUseItemOnBlockPacket.func_148833_a(SourceFile:10)
	at net.minecraft.network.PacketThreadUtil.func_225383_a(SourceFile:21)
	at net.minecraft.util.concurrent.TickDelayedTask.run(SourceFile:18)
	at net.minecraft.util.concurrent.ThreadTaskExecutor.func_213166_h(SourceFile:144)
	at net.minecraft.util.concurrent.RecursiveEventLoop.func_213166_h(SourceFile:23)
	at net.minecraft.server.MinecraftServer.func_213166_h(MinecraftServer.java:734)
	at net.minecraft.server.MinecraftServer.func_213166_h(MinecraftServer.java:159)
	at net.minecraft.util.concurrent.ThreadTaskExecutor.func_213168_p(SourceFile:118)
	at net.minecraft.server.MinecraftServer.func_213205_aW(MinecraftServer.java:717)
	at net.minecraft.server.MinecraftServer.func_213168_p(MinecraftServer.java:711)
	at net.minecraft.util.concurrent.ThreadTaskExecutor.func_213160_bf(SourceFile:103)
	at net.minecraft.server.MinecraftServer.func_213202_o(MinecraftServer.java:696)
	at net.minecraft.server.MinecraftServer.func_240802_v_(MinecraftServer.java:646)
	at net.minecraft.server.MinecraftServer.func_240783_a_(MinecraftServer.java:232)
	at java.lang.Thread.run(Thread.java:748)
